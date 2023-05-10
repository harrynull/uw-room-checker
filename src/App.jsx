import {useEffect, useState} from 'react'
import './App.css'
import {gql} from "./__generated__";
import {TextInput, Button, Grid, Stack, Select, Table, Title} from "@mantine/core";
import {useLazyQuery, useQuery} from "@apollo/client";

const GET_ROOMS = gql(/* GraphQL */`
    query GetRooms($room: String!) {
        section_meeting(where: {location: {_eq:$room}}, order_by:{start_seconds: asc}) {
            days
            section_id
            start_date
            start_seconds
            end_seconds
        }
    }
`);

const GET_COURSE = gql(/* GraphQL */`
    query GetCourse($section: Int!) {
        course_section_by_pk(id: $section) {
            course {
                name
            }
        }
    }
`);

const secondToTime = (seconds) => {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds - hours * 3600) / 60)
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`
}

const getCurrentDayOfWeek = () => {
  const date = new Date()
  const day = date.getDay()
  switch (day) {
    case 0: return "M"
    case 1: return "M"
    case 2: return "T"
    case 3: return "W"
    case 4: return "Th"
    case 5: return "F"
    case 6: return "M"
  }
}

function App() {
  const [room, setRoom] = useState("")
  const [searchRoom, setSearchRoom] = useState("")
  const [day, setDay] = useState(getCurrentDayOfWeek())
  const {data, loading} = useQuery(GET_ROOMS, {variables: {room: searchRoom}, skip: !searchRoom})
  const [fetchCourseName] = useLazyQuery(GET_COURSE);
  const [sectionToCourse, setSectionToCourse] = useState({});
  useEffect(() => {
    if (loading || !data) return
    data.section_meeting
      .filter((meeting) => meeting.days.includes(day) && meeting.start_date === "2023-05-08")
      .forEach((meeting) => {
        fetchCourseName({variables: {section: meeting.section_id}}).then(
          (result) => {
            setSectionToCourse((prev) => ({
              ...prev,
              [meeting.section_id]: result.data.course_section_by_pk.course.name
            }))
          }
        )
      })
  }, [data])
  return (
    <>
      <Stack spacing={"lg"}>
        <Title order={1}>Room Availability Checker</Title>
        <Grid >
          <Grid.Col span={4}>
            <TextInput placeholder={"Room"} value={room} onChange={(event) => setRoom(event.currentTarget.value)}/>
          </Grid.Col>
          <Grid.Col span={5}>
            <Select
              placeholder="Date"
              value={day}
              data={[
                {value: 'M', label: 'Monday'},
                {value: 'T', label: 'Tuesday'},
                {value: 'W', label: 'Wednesday'},
                {value: 'Th', label: 'Thursday'},
                {value: 'F', label: 'Friday'},
              ]}
              onChange={(e) => setDay(e)}
            />
          </Grid.Col>
          <Grid.Col span={1}>
            <Button
              variant="gradient"
              gradient={{from: '#ed6ea0', to: '#ec8c69', deg: 35}}
              onClick={() => setSearchRoom(room)}
            >Search</Button>
          </Grid.Col>
        </Grid>
        <Table verticalSpacing="md" horizontalSpacing="md">
          <thead>
          <tr>
            <th>Course</th>
            <th>Section</th>
            <th>Start</th>
            <th>End</th>
          </tr>
          </thead>
          <tbody>
          {data && data.section_meeting
            .filter((meeting) => meeting.days.includes(day) && meeting.start_date === "2023-05-08")
            .map((meeting) => (
              <tr key={meeting.section_id}>
                <td style={{textAlign: "left"}}>{sectionToCourse[meeting.section_id]}</td>
                <td>{meeting.section_id}</td>
                <td>{secondToTime(meeting.start_seconds)}</td>
                <td>{secondToTime(meeting.end_seconds)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Stack>
      <p>Just want an empty room? Try <a href={"https://portal.uwaterloo.ca/#/campusMap"}>Portal</a></p>
      <p>Data from <a href={"https://uwflow.com/"}>UWFlow</a> | Built by <a href={"https://harrynull.tech/"}>@harrynull</a> | <a href={"https://github.com/harrynull/uw-room-checker"}>Code</a></p>
    </>
  )
}

export default App

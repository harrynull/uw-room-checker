/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  _int4: any;
  _text: any;
  bigint: any;
  date: any;
  numeric: any;
  smallint: any;
  timestamptz: any;
};

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  _nlike?: InputMaybe<Scalars['String']>;
  _nsimilar?: InputMaybe<Scalars['String']>;
  _similar?: InputMaybe<Scalars['String']>;
};

/** expression to compare columns of type _int4. All fields are combined with logical 'AND'. */
export type _Int4_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['_int4']>;
  _gt?: InputMaybe<Scalars['_int4']>;
  _gte?: InputMaybe<Scalars['_int4']>;
  _in?: InputMaybe<Array<Scalars['_int4']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['_int4']>;
  _lte?: InputMaybe<Scalars['_int4']>;
  _neq?: InputMaybe<Scalars['_int4']>;
  _nin?: InputMaybe<Array<Scalars['_int4']>>;
};

/** expression to compare columns of type _text. All fields are combined with logical 'AND'. */
export type _Text_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['_text']>;
  _gt?: InputMaybe<Scalars['_text']>;
  _gte?: InputMaybe<Scalars['_text']>;
  _in?: InputMaybe<Array<Scalars['_text']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['_text']>;
  _lte?: InputMaybe<Scalars['_text']>;
  _neq?: InputMaybe<Scalars['_text']>;
  _nin?: InputMaybe<Array<Scalars['_text']>>;
};

/** columns and relationships of "aggregate.course_easy_buckets" */
export type Aggregate_Course_Easy_Buckets = {
  __typename?: 'aggregate_course_easy_buckets';
  count?: Maybe<Scalars['bigint']>;
  course_id?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['smallint']>;
};

/** aggregated selection of "aggregate.course_easy_buckets" */
export type Aggregate_Course_Easy_Buckets_Aggregate = {
  __typename?: 'aggregate_course_easy_buckets_aggregate';
  aggregate?: Maybe<Aggregate_Course_Easy_Buckets_Aggregate_Fields>;
  nodes: Array<Aggregate_Course_Easy_Buckets>;
};

/** aggregate fields of "aggregate.course_easy_buckets" */
export type Aggregate_Course_Easy_Buckets_Aggregate_Fields = {
  __typename?: 'aggregate_course_easy_buckets_aggregate_fields';
  avg?: Maybe<Aggregate_Course_Easy_Buckets_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Aggregate_Course_Easy_Buckets_Max_Fields>;
  min?: Maybe<Aggregate_Course_Easy_Buckets_Min_Fields>;
  stddev?: Maybe<Aggregate_Course_Easy_Buckets_Stddev_Fields>;
  stddev_pop?: Maybe<Aggregate_Course_Easy_Buckets_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Aggregate_Course_Easy_Buckets_Stddev_Samp_Fields>;
  sum?: Maybe<Aggregate_Course_Easy_Buckets_Sum_Fields>;
  var_pop?: Maybe<Aggregate_Course_Easy_Buckets_Var_Pop_Fields>;
  var_samp?: Maybe<Aggregate_Course_Easy_Buckets_Var_Samp_Fields>;
  variance?: Maybe<Aggregate_Course_Easy_Buckets_Variance_Fields>;
};


/** aggregate fields of "aggregate.course_easy_buckets" */
export type Aggregate_Course_Easy_Buckets_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Aggregate_Course_Easy_Buckets_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "aggregate.course_easy_buckets" */
export type Aggregate_Course_Easy_Buckets_Aggregate_Order_By = {
  avg?: InputMaybe<Aggregate_Course_Easy_Buckets_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Aggregate_Course_Easy_Buckets_Max_Order_By>;
  min?: InputMaybe<Aggregate_Course_Easy_Buckets_Min_Order_By>;
  stddev?: InputMaybe<Aggregate_Course_Easy_Buckets_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Aggregate_Course_Easy_Buckets_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Aggregate_Course_Easy_Buckets_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Aggregate_Course_Easy_Buckets_Sum_Order_By>;
  var_pop?: InputMaybe<Aggregate_Course_Easy_Buckets_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Aggregate_Course_Easy_Buckets_Var_Samp_Order_By>;
  variance?: InputMaybe<Aggregate_Course_Easy_Buckets_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Aggregate_Course_Easy_Buckets_Avg_Fields = {
  __typename?: 'aggregate_course_easy_buckets_avg_fields';
  count?: Maybe<Scalars['Float']>;
  course_id?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "aggregate.course_easy_buckets" */
export type Aggregate_Course_Easy_Buckets_Avg_Order_By = {
  count?: InputMaybe<Order_By>;
  course_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "aggregate.course_easy_buckets". All fields are combined with a logical 'AND'. */
export type Aggregate_Course_Easy_Buckets_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Aggregate_Course_Easy_Buckets_Bool_Exp>>>;
  _not?: InputMaybe<Aggregate_Course_Easy_Buckets_Bool_Exp>;
  _or?: InputMaybe<Array<InputMaybe<Aggregate_Course_Easy_Buckets_Bool_Exp>>>;
  count?: InputMaybe<Bigint_Comparison_Exp>;
  course_id?: InputMaybe<Int_Comparison_Exp>;
  value?: InputMaybe<Smallint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Aggregate_Course_Easy_Buckets_Max_Fields = {
  __typename?: 'aggregate_course_easy_buckets_max_fields';
  count?: Maybe<Scalars['bigint']>;
  course_id?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['smallint']>;
};

/** order by max() on columns of table "aggregate.course_easy_buckets" */
export type Aggregate_Course_Easy_Buckets_Max_Order_By = {
  count?: InputMaybe<Order_By>;
  course_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Aggregate_Course_Easy_Buckets_Min_Fields = {
  __typename?: 'aggregate_course_easy_buckets_min_fields';
  count?: Maybe<Scalars['bigint']>;
  course_id?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['smallint']>;
};

/** order by min() on columns of table "aggregate.course_easy_buckets" */
export type Aggregate_Course_Easy_Buckets_Min_Order_By = {
  count?: InputMaybe<Order_By>;
  course_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** ordering options when selecting data from "aggregate.course_easy_buckets" */
export type Aggregate_Course_Easy_Buckets_Order_By = {
  count?: InputMaybe<Order_By>;
  course_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** select columns of table "aggregate.course_easy_buckets" */
export enum Aggregate_Course_Easy_Buckets_Select_Column {
  /** column name */
  Count = 'count',
  /** column name */
  CourseId = 'course_id',
  /** column name */
  Value = 'value'
}

/** aggregate stddev on columns */
export type Aggregate_Course_Easy_Buckets_Stddev_Fields = {
  __typename?: 'aggregate_course_easy_buckets_stddev_fields';
  count?: Maybe<Scalars['Float']>;
  course_id?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "aggregate.course_easy_buckets" */
export type Aggregate_Course_Easy_Buckets_Stddev_Order_By = {
  count?: InputMaybe<Order_By>;
  course_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Aggregate_Course_Easy_Buckets_Stddev_Pop_Fields = {
  __typename?: 'aggregate_course_easy_buckets_stddev_pop_fields';
  count?: Maybe<Scalars['Float']>;
  course_id?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "aggregate.course_easy_buckets" */
export type Aggregate_Course_Easy_Buckets_Stddev_Pop_Order_By = {
  count?: InputMaybe<Order_By>;
  course_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Aggregate_Course_Easy_Buckets_Stddev_Samp_Fields = {
  __typename?: 'aggregate_course_easy_buckets_stddev_samp_fields';
  count?: Maybe<Scalars['Float']>;
  course_id?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "aggregate.course_easy_buckets" */
export type Aggregate_Course_Easy_Buckets_Stddev_Samp_Order_By = {
  count?: InputMaybe<Order_By>;
  course_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Aggregate_Course_Easy_Buckets_Sum_Fields = {
  __typename?: 'aggregate_course_easy_buckets_sum_fields';
  count?: Maybe<Scalars['bigint']>;
  course_id?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['smallint']>;
};

/** order by sum() on columns of table "aggregate.course_easy_buckets" */
export type Aggregate_Course_Easy_Buckets_Sum_Order_By = {
  count?: InputMaybe<Order_By>;
  course_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Aggregate_Course_Easy_Buckets_Var_Pop_Fields = {
  __typename?: 'aggregate_course_easy_buckets_var_pop_fields';
  count?: Maybe<Scalars['Float']>;
  course_id?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "aggregate.course_easy_buckets" */
export type Aggregate_Course_Easy_Buckets_Var_Pop_Order_By = {
  count?: InputMaybe<Order_By>;
  course_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Aggregate_Course_Easy_Buckets_Var_Samp_Fields = {
  __typename?: 'aggregate_course_easy_buckets_var_samp_fields';
  count?: Maybe<Scalars['Float']>;
  course_id?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "aggregate.course_easy_buckets" */
export type Aggregate_Course_Easy_Buckets_Var_Samp_Order_By = {
  count?: InputMaybe<Order_By>;
  course_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Aggregate_Course_Easy_Buckets_Variance_Fields = {
  __typename?: 'aggregate_course_easy_buckets_variance_fields';
  count?: Maybe<Scalars['Float']>;
  course_id?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "aggregate.course_easy_buckets" */
export type Aggregate_Course_Easy_Buckets_Variance_Order_By = {
  count?: InputMaybe<Order_By>;
  course_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** columns and relationships of "aggregate.course_rating" */
export type Aggregate_Course_Rating = {
  __typename?: 'aggregate_course_rating';
  comment_count?: Maybe<Scalars['bigint']>;
  course_id?: Maybe<Scalars['Int']>;
  easy?: Maybe<Scalars['numeric']>;
  filled_count?: Maybe<Scalars['bigint']>;
  liked?: Maybe<Scalars['numeric']>;
  useful?: Maybe<Scalars['numeric']>;
};

/** aggregated selection of "aggregate.course_rating" */
export type Aggregate_Course_Rating_Aggregate = {
  __typename?: 'aggregate_course_rating_aggregate';
  aggregate?: Maybe<Aggregate_Course_Rating_Aggregate_Fields>;
  nodes: Array<Aggregate_Course_Rating>;
};

/** aggregate fields of "aggregate.course_rating" */
export type Aggregate_Course_Rating_Aggregate_Fields = {
  __typename?: 'aggregate_course_rating_aggregate_fields';
  avg?: Maybe<Aggregate_Course_Rating_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Aggregate_Course_Rating_Max_Fields>;
  min?: Maybe<Aggregate_Course_Rating_Min_Fields>;
  stddev?: Maybe<Aggregate_Course_Rating_Stddev_Fields>;
  stddev_pop?: Maybe<Aggregate_Course_Rating_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Aggregate_Course_Rating_Stddev_Samp_Fields>;
  sum?: Maybe<Aggregate_Course_Rating_Sum_Fields>;
  var_pop?: Maybe<Aggregate_Course_Rating_Var_Pop_Fields>;
  var_samp?: Maybe<Aggregate_Course_Rating_Var_Samp_Fields>;
  variance?: Maybe<Aggregate_Course_Rating_Variance_Fields>;
};


/** aggregate fields of "aggregate.course_rating" */
export type Aggregate_Course_Rating_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Aggregate_Course_Rating_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "aggregate.course_rating" */
export type Aggregate_Course_Rating_Aggregate_Order_By = {
  avg?: InputMaybe<Aggregate_Course_Rating_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Aggregate_Course_Rating_Max_Order_By>;
  min?: InputMaybe<Aggregate_Course_Rating_Min_Order_By>;
  stddev?: InputMaybe<Aggregate_Course_Rating_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Aggregate_Course_Rating_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Aggregate_Course_Rating_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Aggregate_Course_Rating_Sum_Order_By>;
  var_pop?: InputMaybe<Aggregate_Course_Rating_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Aggregate_Course_Rating_Var_Samp_Order_By>;
  variance?: InputMaybe<Aggregate_Course_Rating_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Aggregate_Course_Rating_Avg_Fields = {
  __typename?: 'aggregate_course_rating_avg_fields';
  comment_count?: Maybe<Scalars['Float']>;
  course_id?: Maybe<Scalars['Float']>;
  easy?: Maybe<Scalars['Float']>;
  filled_count?: Maybe<Scalars['Float']>;
  liked?: Maybe<Scalars['Float']>;
  useful?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "aggregate.course_rating" */
export type Aggregate_Course_Rating_Avg_Order_By = {
  comment_count?: InputMaybe<Order_By>;
  course_id?: InputMaybe<Order_By>;
  easy?: InputMaybe<Order_By>;
  filled_count?: InputMaybe<Order_By>;
  liked?: InputMaybe<Order_By>;
  useful?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "aggregate.course_rating". All fields are combined with a logical 'AND'. */
export type Aggregate_Course_Rating_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Aggregate_Course_Rating_Bool_Exp>>>;
  _not?: InputMaybe<Aggregate_Course_Rating_Bool_Exp>;
  _or?: InputMaybe<Array<InputMaybe<Aggregate_Course_Rating_Bool_Exp>>>;
  comment_count?: InputMaybe<Bigint_Comparison_Exp>;
  course_id?: InputMaybe<Int_Comparison_Exp>;
  easy?: InputMaybe<Numeric_Comparison_Exp>;
  filled_count?: InputMaybe<Bigint_Comparison_Exp>;
  liked?: InputMaybe<Numeric_Comparison_Exp>;
  useful?: InputMaybe<Numeric_Comparison_Exp>;
};

/** aggregate max on columns */
export type Aggregate_Course_Rating_Max_Fields = {
  __typename?: 'aggregate_course_rating_max_fields';
  comment_count?: Maybe<Scalars['bigint']>;
  course_id?: Maybe<Scalars['Int']>;
  easy?: Maybe<Scalars['numeric']>;
  filled_count?: Maybe<Scalars['bigint']>;
  liked?: Maybe<Scalars['numeric']>;
  useful?: Maybe<Scalars['numeric']>;
};

/** order by max() on columns of table "aggregate.course_rating" */
export type Aggregate_Course_Rating_Max_Order_By = {
  comment_count?: InputMaybe<Order_By>;
  course_id?: InputMaybe<Order_By>;
  easy?: InputMaybe<Order_By>;
  filled_count?: InputMaybe<Order_By>;
  liked?: InputMaybe<Order_By>;
  useful?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Aggregate_Course_Rating_Min_Fields = {
  __typename?: 'aggregate_course_rating_min_fields';
  comment_count?: Maybe<Scalars['bigint']>;
  course_id?: Maybe<Scalars['Int']>;
  easy?: Maybe<Scalars['numeric']>;
  filled_count?: Maybe<Scalars['bigint']>;
  liked?: Maybe<Scalars['numeric']>;
  useful?: Maybe<Scalars['numeric']>;
};

/** order by min() on columns of table "aggregate.course_rating" */
export type Aggregate_Course_Rating_Min_Order_By = {
  comment_count?: InputMaybe<Order_By>;
  course_id?: InputMaybe<Order_By>;
  easy?: InputMaybe<Order_By>;
  filled_count?: InputMaybe<Order_By>;
  liked?: InputMaybe<Order_By>;
  useful?: InputMaybe<Order_By>;
};

/** ordering options when selecting data from "aggregate.course_rating" */
export type Aggregate_Course_Rating_Order_By = {
  comment_count?: InputMaybe<Order_By>;
  course_id?: InputMaybe<Order_By>;
  easy?: InputMaybe<Order_By>;
  filled_count?: InputMaybe<Order_By>;
  liked?: InputMaybe<Order_By>;
  useful?: InputMaybe<Order_By>;
};

/** select columns of table "aggregate.course_rating" */
export enum Aggregate_Course_Rating_Select_Column {
  /** column name */
  CommentCount = 'comment_count',
  /** column name */
  CourseId = 'course_id',
  /** column name */
  Easy = 'easy',
  /** column name */
  FilledCount = 'filled_count',
  /** column name */
  Liked = 'liked',
  /** column name */
  Useful = 'useful'
}

/** aggregate stddev on columns */
export type Aggregate_Course_Rating_Stddev_Fields = {
  __typename?: 'aggregate_course_rating_stddev_fields';
  comment_count?: Maybe<Scalars['Float']>;
  course_id?: Maybe<Scalars['Float']>;
  easy?: Maybe<Scalars['Float']>;
  filled_count?: Maybe<Scalars['Float']>;
  liked?: Maybe<Scalars['Float']>;
  useful?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "aggregate.course_rating" */
export type Aggregate_Course_Rating_Stddev_Order_By = {
  comment_count?: InputMaybe<Order_By>;
  course_id?: InputMaybe<Order_By>;
  easy?: InputMaybe<Order_By>;
  filled_count?: InputMaybe<Order_By>;
  liked?: InputMaybe<Order_By>;
  useful?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Aggregate_Course_Rating_Stddev_Pop_Fields = {
  __typename?: 'aggregate_course_rating_stddev_pop_fields';
  comment_count?: Maybe<Scalars['Float']>;
  course_id?: Maybe<Scalars['Float']>;
  easy?: Maybe<Scalars['Float']>;
  filled_count?: Maybe<Scalars['Float']>;
  liked?: Maybe<Scalars['Float']>;
  useful?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "aggregate.course_rating" */
export type Aggregate_Course_Rating_Stddev_Pop_Order_By = {
  comment_count?: InputMaybe<Order_By>;
  course_id?: InputMaybe<Order_By>;
  easy?: InputMaybe<Order_By>;
  filled_count?: InputMaybe<Order_By>;
  liked?: InputMaybe<Order_By>;
  useful?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Aggregate_Course_Rating_Stddev_Samp_Fields = {
  __typename?: 'aggregate_course_rating_stddev_samp_fields';
  comment_count?: Maybe<Scalars['Float']>;
  course_id?: Maybe<Scalars['Float']>;
  easy?: Maybe<Scalars['Float']>;
  filled_count?: Maybe<Scalars['Float']>;
  liked?: Maybe<Scalars['Float']>;
  useful?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "aggregate.course_rating" */
export type Aggregate_Course_Rating_Stddev_Samp_Order_By = {
  comment_count?: InputMaybe<Order_By>;
  course_id?: InputMaybe<Order_By>;
  easy?: InputMaybe<Order_By>;
  filled_count?: InputMaybe<Order_By>;
  liked?: InputMaybe<Order_By>;
  useful?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Aggregate_Course_Rating_Sum_Fields = {
  __typename?: 'aggregate_course_rating_sum_fields';
  comment_count?: Maybe<Scalars['bigint']>;
  course_id?: Maybe<Scalars['Int']>;
  easy?: Maybe<Scalars['numeric']>;
  filled_count?: Maybe<Scalars['bigint']>;
  liked?: Maybe<Scalars['numeric']>;
  useful?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "aggregate.course_rating" */
export type Aggregate_Course_Rating_Sum_Order_By = {
  comment_count?: InputMaybe<Order_By>;
  course_id?: InputMaybe<Order_By>;
  easy?: InputMaybe<Order_By>;
  filled_count?: InputMaybe<Order_By>;
  liked?: InputMaybe<Order_By>;
  useful?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Aggregate_Course_Rating_Var_Pop_Fields = {
  __typename?: 'aggregate_course_rating_var_pop_fields';
  comment_count?: Maybe<Scalars['Float']>;
  course_id?: Maybe<Scalars['Float']>;
  easy?: Maybe<Scalars['Float']>;
  filled_count?: Maybe<Scalars['Float']>;
  liked?: Maybe<Scalars['Float']>;
  useful?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "aggregate.course_rating" */
export type Aggregate_Course_Rating_Var_Pop_Order_By = {
  comment_count?: InputMaybe<Order_By>;
  course_id?: InputMaybe<Order_By>;
  easy?: InputMaybe<Order_By>;
  filled_count?: InputMaybe<Order_By>;
  liked?: InputMaybe<Order_By>;
  useful?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Aggregate_Course_Rating_Var_Samp_Fields = {
  __typename?: 'aggregate_course_rating_var_samp_fields';
  comment_count?: Maybe<Scalars['Float']>;
  course_id?: Maybe<Scalars['Float']>;
  easy?: Maybe<Scalars['Float']>;
  filled_count?: Maybe<Scalars['Float']>;
  liked?: Maybe<Scalars['Float']>;
  useful?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "aggregate.course_rating" */
export type Aggregate_Course_Rating_Var_Samp_Order_By = {
  comment_count?: InputMaybe<Order_By>;
  course_id?: InputMaybe<Order_By>;
  easy?: InputMaybe<Order_By>;
  filled_count?: InputMaybe<Order_By>;
  liked?: InputMaybe<Order_By>;
  useful?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Aggregate_Course_Rating_Variance_Fields = {
  __typename?: 'aggregate_course_rating_variance_fields';
  comment_count?: Maybe<Scalars['Float']>;
  course_id?: Maybe<Scalars['Float']>;
  easy?: Maybe<Scalars['Float']>;
  filled_count?: Maybe<Scalars['Float']>;
  liked?: Maybe<Scalars['Float']>;
  useful?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "aggregate.course_rating" */
export type Aggregate_Course_Rating_Variance_Order_By = {
  comment_count?: InputMaybe<Order_By>;
  course_id?: InputMaybe<Order_By>;
  easy?: InputMaybe<Order_By>;
  filled_count?: InputMaybe<Order_By>;
  liked?: InputMaybe<Order_By>;
  useful?: InputMaybe<Order_By>;
};

/** columns and relationships of "aggregate.course_review_rating" */
export type Aggregate_Course_Review_Rating = {
  __typename?: 'aggregate_course_review_rating';
  review_id?: Maybe<Scalars['Int']>;
  upvote_count?: Maybe<Scalars['bigint']>;
};

/** aggregated selection of "aggregate.course_review_rating" */
export type Aggregate_Course_Review_Rating_Aggregate = {
  __typename?: 'aggregate_course_review_rating_aggregate';
  aggregate?: Maybe<Aggregate_Course_Review_Rating_Aggregate_Fields>;
  nodes: Array<Aggregate_Course_Review_Rating>;
};

/** aggregate fields of "aggregate.course_review_rating" */
export type Aggregate_Course_Review_Rating_Aggregate_Fields = {
  __typename?: 'aggregate_course_review_rating_aggregate_fields';
  avg?: Maybe<Aggregate_Course_Review_Rating_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Aggregate_Course_Review_Rating_Max_Fields>;
  min?: Maybe<Aggregate_Course_Review_Rating_Min_Fields>;
  stddev?: Maybe<Aggregate_Course_Review_Rating_Stddev_Fields>;
  stddev_pop?: Maybe<Aggregate_Course_Review_Rating_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Aggregate_Course_Review_Rating_Stddev_Samp_Fields>;
  sum?: Maybe<Aggregate_Course_Review_Rating_Sum_Fields>;
  var_pop?: Maybe<Aggregate_Course_Review_Rating_Var_Pop_Fields>;
  var_samp?: Maybe<Aggregate_Course_Review_Rating_Var_Samp_Fields>;
  variance?: Maybe<Aggregate_Course_Review_Rating_Variance_Fields>;
};


/** aggregate fields of "aggregate.course_review_rating" */
export type Aggregate_Course_Review_Rating_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Aggregate_Course_Review_Rating_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "aggregate.course_review_rating" */
export type Aggregate_Course_Review_Rating_Aggregate_Order_By = {
  avg?: InputMaybe<Aggregate_Course_Review_Rating_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Aggregate_Course_Review_Rating_Max_Order_By>;
  min?: InputMaybe<Aggregate_Course_Review_Rating_Min_Order_By>;
  stddev?: InputMaybe<Aggregate_Course_Review_Rating_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Aggregate_Course_Review_Rating_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Aggregate_Course_Review_Rating_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Aggregate_Course_Review_Rating_Sum_Order_By>;
  var_pop?: InputMaybe<Aggregate_Course_Review_Rating_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Aggregate_Course_Review_Rating_Var_Samp_Order_By>;
  variance?: InputMaybe<Aggregate_Course_Review_Rating_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Aggregate_Course_Review_Rating_Avg_Fields = {
  __typename?: 'aggregate_course_review_rating_avg_fields';
  review_id?: Maybe<Scalars['Float']>;
  upvote_count?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "aggregate.course_review_rating" */
export type Aggregate_Course_Review_Rating_Avg_Order_By = {
  review_id?: InputMaybe<Order_By>;
  upvote_count?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "aggregate.course_review_rating". All fields are combined with a logical 'AND'. */
export type Aggregate_Course_Review_Rating_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Aggregate_Course_Review_Rating_Bool_Exp>>>;
  _not?: InputMaybe<Aggregate_Course_Review_Rating_Bool_Exp>;
  _or?: InputMaybe<Array<InputMaybe<Aggregate_Course_Review_Rating_Bool_Exp>>>;
  review_id?: InputMaybe<Int_Comparison_Exp>;
  upvote_count?: InputMaybe<Bigint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Aggregate_Course_Review_Rating_Max_Fields = {
  __typename?: 'aggregate_course_review_rating_max_fields';
  review_id?: Maybe<Scalars['Int']>;
  upvote_count?: Maybe<Scalars['bigint']>;
};

/** order by max() on columns of table "aggregate.course_review_rating" */
export type Aggregate_Course_Review_Rating_Max_Order_By = {
  review_id?: InputMaybe<Order_By>;
  upvote_count?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Aggregate_Course_Review_Rating_Min_Fields = {
  __typename?: 'aggregate_course_review_rating_min_fields';
  review_id?: Maybe<Scalars['Int']>;
  upvote_count?: Maybe<Scalars['bigint']>;
};

/** order by min() on columns of table "aggregate.course_review_rating" */
export type Aggregate_Course_Review_Rating_Min_Order_By = {
  review_id?: InputMaybe<Order_By>;
  upvote_count?: InputMaybe<Order_By>;
};

/** ordering options when selecting data from "aggregate.course_review_rating" */
export type Aggregate_Course_Review_Rating_Order_By = {
  review_id?: InputMaybe<Order_By>;
  upvote_count?: InputMaybe<Order_By>;
};

/** select columns of table "aggregate.course_review_rating" */
export enum Aggregate_Course_Review_Rating_Select_Column {
  /** column name */
  ReviewId = 'review_id',
  /** column name */
  UpvoteCount = 'upvote_count'
}

/** aggregate stddev on columns */
export type Aggregate_Course_Review_Rating_Stddev_Fields = {
  __typename?: 'aggregate_course_review_rating_stddev_fields';
  review_id?: Maybe<Scalars['Float']>;
  upvote_count?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "aggregate.course_review_rating" */
export type Aggregate_Course_Review_Rating_Stddev_Order_By = {
  review_id?: InputMaybe<Order_By>;
  upvote_count?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Aggregate_Course_Review_Rating_Stddev_Pop_Fields = {
  __typename?: 'aggregate_course_review_rating_stddev_pop_fields';
  review_id?: Maybe<Scalars['Float']>;
  upvote_count?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "aggregate.course_review_rating" */
export type Aggregate_Course_Review_Rating_Stddev_Pop_Order_By = {
  review_id?: InputMaybe<Order_By>;
  upvote_count?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Aggregate_Course_Review_Rating_Stddev_Samp_Fields = {
  __typename?: 'aggregate_course_review_rating_stddev_samp_fields';
  review_id?: Maybe<Scalars['Float']>;
  upvote_count?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "aggregate.course_review_rating" */
export type Aggregate_Course_Review_Rating_Stddev_Samp_Order_By = {
  review_id?: InputMaybe<Order_By>;
  upvote_count?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Aggregate_Course_Review_Rating_Sum_Fields = {
  __typename?: 'aggregate_course_review_rating_sum_fields';
  review_id?: Maybe<Scalars['Int']>;
  upvote_count?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "aggregate.course_review_rating" */
export type Aggregate_Course_Review_Rating_Sum_Order_By = {
  review_id?: InputMaybe<Order_By>;
  upvote_count?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Aggregate_Course_Review_Rating_Var_Pop_Fields = {
  __typename?: 'aggregate_course_review_rating_var_pop_fields';
  review_id?: Maybe<Scalars['Float']>;
  upvote_count?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "aggregate.course_review_rating" */
export type Aggregate_Course_Review_Rating_Var_Pop_Order_By = {
  review_id?: InputMaybe<Order_By>;
  upvote_count?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Aggregate_Course_Review_Rating_Var_Samp_Fields = {
  __typename?: 'aggregate_course_review_rating_var_samp_fields';
  review_id?: Maybe<Scalars['Float']>;
  upvote_count?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "aggregate.course_review_rating" */
export type Aggregate_Course_Review_Rating_Var_Samp_Order_By = {
  review_id?: InputMaybe<Order_By>;
  upvote_count?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Aggregate_Course_Review_Rating_Variance_Fields = {
  __typename?: 'aggregate_course_review_rating_variance_fields';
  review_id?: Maybe<Scalars['Float']>;
  upvote_count?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "aggregate.course_review_rating" */
export type Aggregate_Course_Review_Rating_Variance_Order_By = {
  review_id?: InputMaybe<Order_By>;
  upvote_count?: InputMaybe<Order_By>;
};

/** columns and relationships of "aggregate.course_useful_buckets" */
export type Aggregate_Course_Useful_Buckets = {
  __typename?: 'aggregate_course_useful_buckets';
  count?: Maybe<Scalars['bigint']>;
  course_id?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['smallint']>;
};

/** aggregated selection of "aggregate.course_useful_buckets" */
export type Aggregate_Course_Useful_Buckets_Aggregate = {
  __typename?: 'aggregate_course_useful_buckets_aggregate';
  aggregate?: Maybe<Aggregate_Course_Useful_Buckets_Aggregate_Fields>;
  nodes: Array<Aggregate_Course_Useful_Buckets>;
};

/** aggregate fields of "aggregate.course_useful_buckets" */
export type Aggregate_Course_Useful_Buckets_Aggregate_Fields = {
  __typename?: 'aggregate_course_useful_buckets_aggregate_fields';
  avg?: Maybe<Aggregate_Course_Useful_Buckets_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Aggregate_Course_Useful_Buckets_Max_Fields>;
  min?: Maybe<Aggregate_Course_Useful_Buckets_Min_Fields>;
  stddev?: Maybe<Aggregate_Course_Useful_Buckets_Stddev_Fields>;
  stddev_pop?: Maybe<Aggregate_Course_Useful_Buckets_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Aggregate_Course_Useful_Buckets_Stddev_Samp_Fields>;
  sum?: Maybe<Aggregate_Course_Useful_Buckets_Sum_Fields>;
  var_pop?: Maybe<Aggregate_Course_Useful_Buckets_Var_Pop_Fields>;
  var_samp?: Maybe<Aggregate_Course_Useful_Buckets_Var_Samp_Fields>;
  variance?: Maybe<Aggregate_Course_Useful_Buckets_Variance_Fields>;
};


/** aggregate fields of "aggregate.course_useful_buckets" */
export type Aggregate_Course_Useful_Buckets_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Aggregate_Course_Useful_Buckets_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "aggregate.course_useful_buckets" */
export type Aggregate_Course_Useful_Buckets_Aggregate_Order_By = {
  avg?: InputMaybe<Aggregate_Course_Useful_Buckets_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Aggregate_Course_Useful_Buckets_Max_Order_By>;
  min?: InputMaybe<Aggregate_Course_Useful_Buckets_Min_Order_By>;
  stddev?: InputMaybe<Aggregate_Course_Useful_Buckets_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Aggregate_Course_Useful_Buckets_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Aggregate_Course_Useful_Buckets_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Aggregate_Course_Useful_Buckets_Sum_Order_By>;
  var_pop?: InputMaybe<Aggregate_Course_Useful_Buckets_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Aggregate_Course_Useful_Buckets_Var_Samp_Order_By>;
  variance?: InputMaybe<Aggregate_Course_Useful_Buckets_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Aggregate_Course_Useful_Buckets_Avg_Fields = {
  __typename?: 'aggregate_course_useful_buckets_avg_fields';
  count?: Maybe<Scalars['Float']>;
  course_id?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "aggregate.course_useful_buckets" */
export type Aggregate_Course_Useful_Buckets_Avg_Order_By = {
  count?: InputMaybe<Order_By>;
  course_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "aggregate.course_useful_buckets". All fields are combined with a logical 'AND'. */
export type Aggregate_Course_Useful_Buckets_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Aggregate_Course_Useful_Buckets_Bool_Exp>>>;
  _not?: InputMaybe<Aggregate_Course_Useful_Buckets_Bool_Exp>;
  _or?: InputMaybe<Array<InputMaybe<Aggregate_Course_Useful_Buckets_Bool_Exp>>>;
  count?: InputMaybe<Bigint_Comparison_Exp>;
  course_id?: InputMaybe<Int_Comparison_Exp>;
  value?: InputMaybe<Smallint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Aggregate_Course_Useful_Buckets_Max_Fields = {
  __typename?: 'aggregate_course_useful_buckets_max_fields';
  count?: Maybe<Scalars['bigint']>;
  course_id?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['smallint']>;
};

/** order by max() on columns of table "aggregate.course_useful_buckets" */
export type Aggregate_Course_Useful_Buckets_Max_Order_By = {
  count?: InputMaybe<Order_By>;
  course_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Aggregate_Course_Useful_Buckets_Min_Fields = {
  __typename?: 'aggregate_course_useful_buckets_min_fields';
  count?: Maybe<Scalars['bigint']>;
  course_id?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['smallint']>;
};

/** order by min() on columns of table "aggregate.course_useful_buckets" */
export type Aggregate_Course_Useful_Buckets_Min_Order_By = {
  count?: InputMaybe<Order_By>;
  course_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** ordering options when selecting data from "aggregate.course_useful_buckets" */
export type Aggregate_Course_Useful_Buckets_Order_By = {
  count?: InputMaybe<Order_By>;
  course_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** select columns of table "aggregate.course_useful_buckets" */
export enum Aggregate_Course_Useful_Buckets_Select_Column {
  /** column name */
  Count = 'count',
  /** column name */
  CourseId = 'course_id',
  /** column name */
  Value = 'value'
}

/** aggregate stddev on columns */
export type Aggregate_Course_Useful_Buckets_Stddev_Fields = {
  __typename?: 'aggregate_course_useful_buckets_stddev_fields';
  count?: Maybe<Scalars['Float']>;
  course_id?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "aggregate.course_useful_buckets" */
export type Aggregate_Course_Useful_Buckets_Stddev_Order_By = {
  count?: InputMaybe<Order_By>;
  course_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Aggregate_Course_Useful_Buckets_Stddev_Pop_Fields = {
  __typename?: 'aggregate_course_useful_buckets_stddev_pop_fields';
  count?: Maybe<Scalars['Float']>;
  course_id?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "aggregate.course_useful_buckets" */
export type Aggregate_Course_Useful_Buckets_Stddev_Pop_Order_By = {
  count?: InputMaybe<Order_By>;
  course_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Aggregate_Course_Useful_Buckets_Stddev_Samp_Fields = {
  __typename?: 'aggregate_course_useful_buckets_stddev_samp_fields';
  count?: Maybe<Scalars['Float']>;
  course_id?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "aggregate.course_useful_buckets" */
export type Aggregate_Course_Useful_Buckets_Stddev_Samp_Order_By = {
  count?: InputMaybe<Order_By>;
  course_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Aggregate_Course_Useful_Buckets_Sum_Fields = {
  __typename?: 'aggregate_course_useful_buckets_sum_fields';
  count?: Maybe<Scalars['bigint']>;
  course_id?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['smallint']>;
};

/** order by sum() on columns of table "aggregate.course_useful_buckets" */
export type Aggregate_Course_Useful_Buckets_Sum_Order_By = {
  count?: InputMaybe<Order_By>;
  course_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Aggregate_Course_Useful_Buckets_Var_Pop_Fields = {
  __typename?: 'aggregate_course_useful_buckets_var_pop_fields';
  count?: Maybe<Scalars['Float']>;
  course_id?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "aggregate.course_useful_buckets" */
export type Aggregate_Course_Useful_Buckets_Var_Pop_Order_By = {
  count?: InputMaybe<Order_By>;
  course_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Aggregate_Course_Useful_Buckets_Var_Samp_Fields = {
  __typename?: 'aggregate_course_useful_buckets_var_samp_fields';
  count?: Maybe<Scalars['Float']>;
  course_id?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "aggregate.course_useful_buckets" */
export type Aggregate_Course_Useful_Buckets_Var_Samp_Order_By = {
  count?: InputMaybe<Order_By>;
  course_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Aggregate_Course_Useful_Buckets_Variance_Fields = {
  __typename?: 'aggregate_course_useful_buckets_variance_fields';
  count?: Maybe<Scalars['Float']>;
  course_id?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "aggregate.course_useful_buckets" */
export type Aggregate_Course_Useful_Buckets_Variance_Order_By = {
  count?: InputMaybe<Order_By>;
  course_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** columns and relationships of "aggregate.prof_clear_buckets" */
export type Aggregate_Prof_Clear_Buckets = {
  __typename?: 'aggregate_prof_clear_buckets';
  count?: Maybe<Scalars['bigint']>;
  prof_id?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['smallint']>;
};

/** aggregated selection of "aggregate.prof_clear_buckets" */
export type Aggregate_Prof_Clear_Buckets_Aggregate = {
  __typename?: 'aggregate_prof_clear_buckets_aggregate';
  aggregate?: Maybe<Aggregate_Prof_Clear_Buckets_Aggregate_Fields>;
  nodes: Array<Aggregate_Prof_Clear_Buckets>;
};

/** aggregate fields of "aggregate.prof_clear_buckets" */
export type Aggregate_Prof_Clear_Buckets_Aggregate_Fields = {
  __typename?: 'aggregate_prof_clear_buckets_aggregate_fields';
  avg?: Maybe<Aggregate_Prof_Clear_Buckets_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Aggregate_Prof_Clear_Buckets_Max_Fields>;
  min?: Maybe<Aggregate_Prof_Clear_Buckets_Min_Fields>;
  stddev?: Maybe<Aggregate_Prof_Clear_Buckets_Stddev_Fields>;
  stddev_pop?: Maybe<Aggregate_Prof_Clear_Buckets_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Aggregate_Prof_Clear_Buckets_Stddev_Samp_Fields>;
  sum?: Maybe<Aggregate_Prof_Clear_Buckets_Sum_Fields>;
  var_pop?: Maybe<Aggregate_Prof_Clear_Buckets_Var_Pop_Fields>;
  var_samp?: Maybe<Aggregate_Prof_Clear_Buckets_Var_Samp_Fields>;
  variance?: Maybe<Aggregate_Prof_Clear_Buckets_Variance_Fields>;
};


/** aggregate fields of "aggregate.prof_clear_buckets" */
export type Aggregate_Prof_Clear_Buckets_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Aggregate_Prof_Clear_Buckets_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "aggregate.prof_clear_buckets" */
export type Aggregate_Prof_Clear_Buckets_Aggregate_Order_By = {
  avg?: InputMaybe<Aggregate_Prof_Clear_Buckets_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Aggregate_Prof_Clear_Buckets_Max_Order_By>;
  min?: InputMaybe<Aggregate_Prof_Clear_Buckets_Min_Order_By>;
  stddev?: InputMaybe<Aggregate_Prof_Clear_Buckets_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Aggregate_Prof_Clear_Buckets_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Aggregate_Prof_Clear_Buckets_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Aggregate_Prof_Clear_Buckets_Sum_Order_By>;
  var_pop?: InputMaybe<Aggregate_Prof_Clear_Buckets_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Aggregate_Prof_Clear_Buckets_Var_Samp_Order_By>;
  variance?: InputMaybe<Aggregate_Prof_Clear_Buckets_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Aggregate_Prof_Clear_Buckets_Avg_Fields = {
  __typename?: 'aggregate_prof_clear_buckets_avg_fields';
  count?: Maybe<Scalars['Float']>;
  prof_id?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "aggregate.prof_clear_buckets" */
export type Aggregate_Prof_Clear_Buckets_Avg_Order_By = {
  count?: InputMaybe<Order_By>;
  prof_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "aggregate.prof_clear_buckets". All fields are combined with a logical 'AND'. */
export type Aggregate_Prof_Clear_Buckets_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Aggregate_Prof_Clear_Buckets_Bool_Exp>>>;
  _not?: InputMaybe<Aggregate_Prof_Clear_Buckets_Bool_Exp>;
  _or?: InputMaybe<Array<InputMaybe<Aggregate_Prof_Clear_Buckets_Bool_Exp>>>;
  count?: InputMaybe<Bigint_Comparison_Exp>;
  prof_id?: InputMaybe<Int_Comparison_Exp>;
  value?: InputMaybe<Smallint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Aggregate_Prof_Clear_Buckets_Max_Fields = {
  __typename?: 'aggregate_prof_clear_buckets_max_fields';
  count?: Maybe<Scalars['bigint']>;
  prof_id?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['smallint']>;
};

/** order by max() on columns of table "aggregate.prof_clear_buckets" */
export type Aggregate_Prof_Clear_Buckets_Max_Order_By = {
  count?: InputMaybe<Order_By>;
  prof_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Aggregate_Prof_Clear_Buckets_Min_Fields = {
  __typename?: 'aggregate_prof_clear_buckets_min_fields';
  count?: Maybe<Scalars['bigint']>;
  prof_id?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['smallint']>;
};

/** order by min() on columns of table "aggregate.prof_clear_buckets" */
export type Aggregate_Prof_Clear_Buckets_Min_Order_By = {
  count?: InputMaybe<Order_By>;
  prof_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** ordering options when selecting data from "aggregate.prof_clear_buckets" */
export type Aggregate_Prof_Clear_Buckets_Order_By = {
  count?: InputMaybe<Order_By>;
  prof_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** select columns of table "aggregate.prof_clear_buckets" */
export enum Aggregate_Prof_Clear_Buckets_Select_Column {
  /** column name */
  Count = 'count',
  /** column name */
  ProfId = 'prof_id',
  /** column name */
  Value = 'value'
}

/** aggregate stddev on columns */
export type Aggregate_Prof_Clear_Buckets_Stddev_Fields = {
  __typename?: 'aggregate_prof_clear_buckets_stddev_fields';
  count?: Maybe<Scalars['Float']>;
  prof_id?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "aggregate.prof_clear_buckets" */
export type Aggregate_Prof_Clear_Buckets_Stddev_Order_By = {
  count?: InputMaybe<Order_By>;
  prof_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Aggregate_Prof_Clear_Buckets_Stddev_Pop_Fields = {
  __typename?: 'aggregate_prof_clear_buckets_stddev_pop_fields';
  count?: Maybe<Scalars['Float']>;
  prof_id?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "aggregate.prof_clear_buckets" */
export type Aggregate_Prof_Clear_Buckets_Stddev_Pop_Order_By = {
  count?: InputMaybe<Order_By>;
  prof_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Aggregate_Prof_Clear_Buckets_Stddev_Samp_Fields = {
  __typename?: 'aggregate_prof_clear_buckets_stddev_samp_fields';
  count?: Maybe<Scalars['Float']>;
  prof_id?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "aggregate.prof_clear_buckets" */
export type Aggregate_Prof_Clear_Buckets_Stddev_Samp_Order_By = {
  count?: InputMaybe<Order_By>;
  prof_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Aggregate_Prof_Clear_Buckets_Sum_Fields = {
  __typename?: 'aggregate_prof_clear_buckets_sum_fields';
  count?: Maybe<Scalars['bigint']>;
  prof_id?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['smallint']>;
};

/** order by sum() on columns of table "aggregate.prof_clear_buckets" */
export type Aggregate_Prof_Clear_Buckets_Sum_Order_By = {
  count?: InputMaybe<Order_By>;
  prof_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Aggregate_Prof_Clear_Buckets_Var_Pop_Fields = {
  __typename?: 'aggregate_prof_clear_buckets_var_pop_fields';
  count?: Maybe<Scalars['Float']>;
  prof_id?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "aggregate.prof_clear_buckets" */
export type Aggregate_Prof_Clear_Buckets_Var_Pop_Order_By = {
  count?: InputMaybe<Order_By>;
  prof_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Aggregate_Prof_Clear_Buckets_Var_Samp_Fields = {
  __typename?: 'aggregate_prof_clear_buckets_var_samp_fields';
  count?: Maybe<Scalars['Float']>;
  prof_id?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "aggregate.prof_clear_buckets" */
export type Aggregate_Prof_Clear_Buckets_Var_Samp_Order_By = {
  count?: InputMaybe<Order_By>;
  prof_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Aggregate_Prof_Clear_Buckets_Variance_Fields = {
  __typename?: 'aggregate_prof_clear_buckets_variance_fields';
  count?: Maybe<Scalars['Float']>;
  prof_id?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "aggregate.prof_clear_buckets" */
export type Aggregate_Prof_Clear_Buckets_Variance_Order_By = {
  count?: InputMaybe<Order_By>;
  prof_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** columns and relationships of "aggregate.prof_engaging_buckets" */
export type Aggregate_Prof_Engaging_Buckets = {
  __typename?: 'aggregate_prof_engaging_buckets';
  count?: Maybe<Scalars['bigint']>;
  prof_id?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['smallint']>;
};

/** aggregated selection of "aggregate.prof_engaging_buckets" */
export type Aggregate_Prof_Engaging_Buckets_Aggregate = {
  __typename?: 'aggregate_prof_engaging_buckets_aggregate';
  aggregate?: Maybe<Aggregate_Prof_Engaging_Buckets_Aggregate_Fields>;
  nodes: Array<Aggregate_Prof_Engaging_Buckets>;
};

/** aggregate fields of "aggregate.prof_engaging_buckets" */
export type Aggregate_Prof_Engaging_Buckets_Aggregate_Fields = {
  __typename?: 'aggregate_prof_engaging_buckets_aggregate_fields';
  avg?: Maybe<Aggregate_Prof_Engaging_Buckets_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Aggregate_Prof_Engaging_Buckets_Max_Fields>;
  min?: Maybe<Aggregate_Prof_Engaging_Buckets_Min_Fields>;
  stddev?: Maybe<Aggregate_Prof_Engaging_Buckets_Stddev_Fields>;
  stddev_pop?: Maybe<Aggregate_Prof_Engaging_Buckets_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Aggregate_Prof_Engaging_Buckets_Stddev_Samp_Fields>;
  sum?: Maybe<Aggregate_Prof_Engaging_Buckets_Sum_Fields>;
  var_pop?: Maybe<Aggregate_Prof_Engaging_Buckets_Var_Pop_Fields>;
  var_samp?: Maybe<Aggregate_Prof_Engaging_Buckets_Var_Samp_Fields>;
  variance?: Maybe<Aggregate_Prof_Engaging_Buckets_Variance_Fields>;
};


/** aggregate fields of "aggregate.prof_engaging_buckets" */
export type Aggregate_Prof_Engaging_Buckets_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Aggregate_Prof_Engaging_Buckets_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "aggregate.prof_engaging_buckets" */
export type Aggregate_Prof_Engaging_Buckets_Aggregate_Order_By = {
  avg?: InputMaybe<Aggregate_Prof_Engaging_Buckets_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Aggregate_Prof_Engaging_Buckets_Max_Order_By>;
  min?: InputMaybe<Aggregate_Prof_Engaging_Buckets_Min_Order_By>;
  stddev?: InputMaybe<Aggregate_Prof_Engaging_Buckets_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Aggregate_Prof_Engaging_Buckets_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Aggregate_Prof_Engaging_Buckets_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Aggregate_Prof_Engaging_Buckets_Sum_Order_By>;
  var_pop?: InputMaybe<Aggregate_Prof_Engaging_Buckets_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Aggregate_Prof_Engaging_Buckets_Var_Samp_Order_By>;
  variance?: InputMaybe<Aggregate_Prof_Engaging_Buckets_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Aggregate_Prof_Engaging_Buckets_Avg_Fields = {
  __typename?: 'aggregate_prof_engaging_buckets_avg_fields';
  count?: Maybe<Scalars['Float']>;
  prof_id?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "aggregate.prof_engaging_buckets" */
export type Aggregate_Prof_Engaging_Buckets_Avg_Order_By = {
  count?: InputMaybe<Order_By>;
  prof_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "aggregate.prof_engaging_buckets". All fields are combined with a logical 'AND'. */
export type Aggregate_Prof_Engaging_Buckets_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Aggregate_Prof_Engaging_Buckets_Bool_Exp>>>;
  _not?: InputMaybe<Aggregate_Prof_Engaging_Buckets_Bool_Exp>;
  _or?: InputMaybe<Array<InputMaybe<Aggregate_Prof_Engaging_Buckets_Bool_Exp>>>;
  count?: InputMaybe<Bigint_Comparison_Exp>;
  prof_id?: InputMaybe<Int_Comparison_Exp>;
  value?: InputMaybe<Smallint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Aggregate_Prof_Engaging_Buckets_Max_Fields = {
  __typename?: 'aggregate_prof_engaging_buckets_max_fields';
  count?: Maybe<Scalars['bigint']>;
  prof_id?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['smallint']>;
};

/** order by max() on columns of table "aggregate.prof_engaging_buckets" */
export type Aggregate_Prof_Engaging_Buckets_Max_Order_By = {
  count?: InputMaybe<Order_By>;
  prof_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Aggregate_Prof_Engaging_Buckets_Min_Fields = {
  __typename?: 'aggregate_prof_engaging_buckets_min_fields';
  count?: Maybe<Scalars['bigint']>;
  prof_id?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['smallint']>;
};

/** order by min() on columns of table "aggregate.prof_engaging_buckets" */
export type Aggregate_Prof_Engaging_Buckets_Min_Order_By = {
  count?: InputMaybe<Order_By>;
  prof_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** ordering options when selecting data from "aggregate.prof_engaging_buckets" */
export type Aggregate_Prof_Engaging_Buckets_Order_By = {
  count?: InputMaybe<Order_By>;
  prof_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** select columns of table "aggregate.prof_engaging_buckets" */
export enum Aggregate_Prof_Engaging_Buckets_Select_Column {
  /** column name */
  Count = 'count',
  /** column name */
  ProfId = 'prof_id',
  /** column name */
  Value = 'value'
}

/** aggregate stddev on columns */
export type Aggregate_Prof_Engaging_Buckets_Stddev_Fields = {
  __typename?: 'aggregate_prof_engaging_buckets_stddev_fields';
  count?: Maybe<Scalars['Float']>;
  prof_id?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "aggregate.prof_engaging_buckets" */
export type Aggregate_Prof_Engaging_Buckets_Stddev_Order_By = {
  count?: InputMaybe<Order_By>;
  prof_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Aggregate_Prof_Engaging_Buckets_Stddev_Pop_Fields = {
  __typename?: 'aggregate_prof_engaging_buckets_stddev_pop_fields';
  count?: Maybe<Scalars['Float']>;
  prof_id?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "aggregate.prof_engaging_buckets" */
export type Aggregate_Prof_Engaging_Buckets_Stddev_Pop_Order_By = {
  count?: InputMaybe<Order_By>;
  prof_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Aggregate_Prof_Engaging_Buckets_Stddev_Samp_Fields = {
  __typename?: 'aggregate_prof_engaging_buckets_stddev_samp_fields';
  count?: Maybe<Scalars['Float']>;
  prof_id?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "aggregate.prof_engaging_buckets" */
export type Aggregate_Prof_Engaging_Buckets_Stddev_Samp_Order_By = {
  count?: InputMaybe<Order_By>;
  prof_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Aggregate_Prof_Engaging_Buckets_Sum_Fields = {
  __typename?: 'aggregate_prof_engaging_buckets_sum_fields';
  count?: Maybe<Scalars['bigint']>;
  prof_id?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['smallint']>;
};

/** order by sum() on columns of table "aggregate.prof_engaging_buckets" */
export type Aggregate_Prof_Engaging_Buckets_Sum_Order_By = {
  count?: InputMaybe<Order_By>;
  prof_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Aggregate_Prof_Engaging_Buckets_Var_Pop_Fields = {
  __typename?: 'aggregate_prof_engaging_buckets_var_pop_fields';
  count?: Maybe<Scalars['Float']>;
  prof_id?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "aggregate.prof_engaging_buckets" */
export type Aggregate_Prof_Engaging_Buckets_Var_Pop_Order_By = {
  count?: InputMaybe<Order_By>;
  prof_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Aggregate_Prof_Engaging_Buckets_Var_Samp_Fields = {
  __typename?: 'aggregate_prof_engaging_buckets_var_samp_fields';
  count?: Maybe<Scalars['Float']>;
  prof_id?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "aggregate.prof_engaging_buckets" */
export type Aggregate_Prof_Engaging_Buckets_Var_Samp_Order_By = {
  count?: InputMaybe<Order_By>;
  prof_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Aggregate_Prof_Engaging_Buckets_Variance_Fields = {
  __typename?: 'aggregate_prof_engaging_buckets_variance_fields';
  count?: Maybe<Scalars['Float']>;
  prof_id?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "aggregate.prof_engaging_buckets" */
export type Aggregate_Prof_Engaging_Buckets_Variance_Order_By = {
  count?: InputMaybe<Order_By>;
  prof_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** columns and relationships of "aggregate.prof_rating" */
export type Aggregate_Prof_Rating = {
  __typename?: 'aggregate_prof_rating';
  clear?: Maybe<Scalars['numeric']>;
  comment_count?: Maybe<Scalars['bigint']>;
  engaging?: Maybe<Scalars['numeric']>;
  filled_count?: Maybe<Scalars['bigint']>;
  liked?: Maybe<Scalars['numeric']>;
  prof_id?: Maybe<Scalars['Int']>;
};

/** aggregated selection of "aggregate.prof_rating" */
export type Aggregate_Prof_Rating_Aggregate = {
  __typename?: 'aggregate_prof_rating_aggregate';
  aggregate?: Maybe<Aggregate_Prof_Rating_Aggregate_Fields>;
  nodes: Array<Aggregate_Prof_Rating>;
};

/** aggregate fields of "aggregate.prof_rating" */
export type Aggregate_Prof_Rating_Aggregate_Fields = {
  __typename?: 'aggregate_prof_rating_aggregate_fields';
  avg?: Maybe<Aggregate_Prof_Rating_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Aggregate_Prof_Rating_Max_Fields>;
  min?: Maybe<Aggregate_Prof_Rating_Min_Fields>;
  stddev?: Maybe<Aggregate_Prof_Rating_Stddev_Fields>;
  stddev_pop?: Maybe<Aggregate_Prof_Rating_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Aggregate_Prof_Rating_Stddev_Samp_Fields>;
  sum?: Maybe<Aggregate_Prof_Rating_Sum_Fields>;
  var_pop?: Maybe<Aggregate_Prof_Rating_Var_Pop_Fields>;
  var_samp?: Maybe<Aggregate_Prof_Rating_Var_Samp_Fields>;
  variance?: Maybe<Aggregate_Prof_Rating_Variance_Fields>;
};


/** aggregate fields of "aggregate.prof_rating" */
export type Aggregate_Prof_Rating_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Aggregate_Prof_Rating_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "aggregate.prof_rating" */
export type Aggregate_Prof_Rating_Aggregate_Order_By = {
  avg?: InputMaybe<Aggregate_Prof_Rating_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Aggregate_Prof_Rating_Max_Order_By>;
  min?: InputMaybe<Aggregate_Prof_Rating_Min_Order_By>;
  stddev?: InputMaybe<Aggregate_Prof_Rating_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Aggregate_Prof_Rating_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Aggregate_Prof_Rating_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Aggregate_Prof_Rating_Sum_Order_By>;
  var_pop?: InputMaybe<Aggregate_Prof_Rating_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Aggregate_Prof_Rating_Var_Samp_Order_By>;
  variance?: InputMaybe<Aggregate_Prof_Rating_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Aggregate_Prof_Rating_Avg_Fields = {
  __typename?: 'aggregate_prof_rating_avg_fields';
  clear?: Maybe<Scalars['Float']>;
  comment_count?: Maybe<Scalars['Float']>;
  engaging?: Maybe<Scalars['Float']>;
  filled_count?: Maybe<Scalars['Float']>;
  liked?: Maybe<Scalars['Float']>;
  prof_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "aggregate.prof_rating" */
export type Aggregate_Prof_Rating_Avg_Order_By = {
  clear?: InputMaybe<Order_By>;
  comment_count?: InputMaybe<Order_By>;
  engaging?: InputMaybe<Order_By>;
  filled_count?: InputMaybe<Order_By>;
  liked?: InputMaybe<Order_By>;
  prof_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "aggregate.prof_rating". All fields are combined with a logical 'AND'. */
export type Aggregate_Prof_Rating_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Aggregate_Prof_Rating_Bool_Exp>>>;
  _not?: InputMaybe<Aggregate_Prof_Rating_Bool_Exp>;
  _or?: InputMaybe<Array<InputMaybe<Aggregate_Prof_Rating_Bool_Exp>>>;
  clear?: InputMaybe<Numeric_Comparison_Exp>;
  comment_count?: InputMaybe<Bigint_Comparison_Exp>;
  engaging?: InputMaybe<Numeric_Comparison_Exp>;
  filled_count?: InputMaybe<Bigint_Comparison_Exp>;
  liked?: InputMaybe<Numeric_Comparison_Exp>;
  prof_id?: InputMaybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type Aggregate_Prof_Rating_Max_Fields = {
  __typename?: 'aggregate_prof_rating_max_fields';
  clear?: Maybe<Scalars['numeric']>;
  comment_count?: Maybe<Scalars['bigint']>;
  engaging?: Maybe<Scalars['numeric']>;
  filled_count?: Maybe<Scalars['bigint']>;
  liked?: Maybe<Scalars['numeric']>;
  prof_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "aggregate.prof_rating" */
export type Aggregate_Prof_Rating_Max_Order_By = {
  clear?: InputMaybe<Order_By>;
  comment_count?: InputMaybe<Order_By>;
  engaging?: InputMaybe<Order_By>;
  filled_count?: InputMaybe<Order_By>;
  liked?: InputMaybe<Order_By>;
  prof_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Aggregate_Prof_Rating_Min_Fields = {
  __typename?: 'aggregate_prof_rating_min_fields';
  clear?: Maybe<Scalars['numeric']>;
  comment_count?: Maybe<Scalars['bigint']>;
  engaging?: Maybe<Scalars['numeric']>;
  filled_count?: Maybe<Scalars['bigint']>;
  liked?: Maybe<Scalars['numeric']>;
  prof_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "aggregate.prof_rating" */
export type Aggregate_Prof_Rating_Min_Order_By = {
  clear?: InputMaybe<Order_By>;
  comment_count?: InputMaybe<Order_By>;
  engaging?: InputMaybe<Order_By>;
  filled_count?: InputMaybe<Order_By>;
  liked?: InputMaybe<Order_By>;
  prof_id?: InputMaybe<Order_By>;
};

/** ordering options when selecting data from "aggregate.prof_rating" */
export type Aggregate_Prof_Rating_Order_By = {
  clear?: InputMaybe<Order_By>;
  comment_count?: InputMaybe<Order_By>;
  engaging?: InputMaybe<Order_By>;
  filled_count?: InputMaybe<Order_By>;
  liked?: InputMaybe<Order_By>;
  prof_id?: InputMaybe<Order_By>;
};

/** select columns of table "aggregate.prof_rating" */
export enum Aggregate_Prof_Rating_Select_Column {
  /** column name */
  Clear = 'clear',
  /** column name */
  CommentCount = 'comment_count',
  /** column name */
  Engaging = 'engaging',
  /** column name */
  FilledCount = 'filled_count',
  /** column name */
  Liked = 'liked',
  /** column name */
  ProfId = 'prof_id'
}

/** aggregate stddev on columns */
export type Aggregate_Prof_Rating_Stddev_Fields = {
  __typename?: 'aggregate_prof_rating_stddev_fields';
  clear?: Maybe<Scalars['Float']>;
  comment_count?: Maybe<Scalars['Float']>;
  engaging?: Maybe<Scalars['Float']>;
  filled_count?: Maybe<Scalars['Float']>;
  liked?: Maybe<Scalars['Float']>;
  prof_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "aggregate.prof_rating" */
export type Aggregate_Prof_Rating_Stddev_Order_By = {
  clear?: InputMaybe<Order_By>;
  comment_count?: InputMaybe<Order_By>;
  engaging?: InputMaybe<Order_By>;
  filled_count?: InputMaybe<Order_By>;
  liked?: InputMaybe<Order_By>;
  prof_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Aggregate_Prof_Rating_Stddev_Pop_Fields = {
  __typename?: 'aggregate_prof_rating_stddev_pop_fields';
  clear?: Maybe<Scalars['Float']>;
  comment_count?: Maybe<Scalars['Float']>;
  engaging?: Maybe<Scalars['Float']>;
  filled_count?: Maybe<Scalars['Float']>;
  liked?: Maybe<Scalars['Float']>;
  prof_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "aggregate.prof_rating" */
export type Aggregate_Prof_Rating_Stddev_Pop_Order_By = {
  clear?: InputMaybe<Order_By>;
  comment_count?: InputMaybe<Order_By>;
  engaging?: InputMaybe<Order_By>;
  filled_count?: InputMaybe<Order_By>;
  liked?: InputMaybe<Order_By>;
  prof_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Aggregate_Prof_Rating_Stddev_Samp_Fields = {
  __typename?: 'aggregate_prof_rating_stddev_samp_fields';
  clear?: Maybe<Scalars['Float']>;
  comment_count?: Maybe<Scalars['Float']>;
  engaging?: Maybe<Scalars['Float']>;
  filled_count?: Maybe<Scalars['Float']>;
  liked?: Maybe<Scalars['Float']>;
  prof_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "aggregate.prof_rating" */
export type Aggregate_Prof_Rating_Stddev_Samp_Order_By = {
  clear?: InputMaybe<Order_By>;
  comment_count?: InputMaybe<Order_By>;
  engaging?: InputMaybe<Order_By>;
  filled_count?: InputMaybe<Order_By>;
  liked?: InputMaybe<Order_By>;
  prof_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Aggregate_Prof_Rating_Sum_Fields = {
  __typename?: 'aggregate_prof_rating_sum_fields';
  clear?: Maybe<Scalars['numeric']>;
  comment_count?: Maybe<Scalars['bigint']>;
  engaging?: Maybe<Scalars['numeric']>;
  filled_count?: Maybe<Scalars['bigint']>;
  liked?: Maybe<Scalars['numeric']>;
  prof_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "aggregate.prof_rating" */
export type Aggregate_Prof_Rating_Sum_Order_By = {
  clear?: InputMaybe<Order_By>;
  comment_count?: InputMaybe<Order_By>;
  engaging?: InputMaybe<Order_By>;
  filled_count?: InputMaybe<Order_By>;
  liked?: InputMaybe<Order_By>;
  prof_id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Aggregate_Prof_Rating_Var_Pop_Fields = {
  __typename?: 'aggregate_prof_rating_var_pop_fields';
  clear?: Maybe<Scalars['Float']>;
  comment_count?: Maybe<Scalars['Float']>;
  engaging?: Maybe<Scalars['Float']>;
  filled_count?: Maybe<Scalars['Float']>;
  liked?: Maybe<Scalars['Float']>;
  prof_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "aggregate.prof_rating" */
export type Aggregate_Prof_Rating_Var_Pop_Order_By = {
  clear?: InputMaybe<Order_By>;
  comment_count?: InputMaybe<Order_By>;
  engaging?: InputMaybe<Order_By>;
  filled_count?: InputMaybe<Order_By>;
  liked?: InputMaybe<Order_By>;
  prof_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Aggregate_Prof_Rating_Var_Samp_Fields = {
  __typename?: 'aggregate_prof_rating_var_samp_fields';
  clear?: Maybe<Scalars['Float']>;
  comment_count?: Maybe<Scalars['Float']>;
  engaging?: Maybe<Scalars['Float']>;
  filled_count?: Maybe<Scalars['Float']>;
  liked?: Maybe<Scalars['Float']>;
  prof_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "aggregate.prof_rating" */
export type Aggregate_Prof_Rating_Var_Samp_Order_By = {
  clear?: InputMaybe<Order_By>;
  comment_count?: InputMaybe<Order_By>;
  engaging?: InputMaybe<Order_By>;
  filled_count?: InputMaybe<Order_By>;
  liked?: InputMaybe<Order_By>;
  prof_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Aggregate_Prof_Rating_Variance_Fields = {
  __typename?: 'aggregate_prof_rating_variance_fields';
  clear?: Maybe<Scalars['Float']>;
  comment_count?: Maybe<Scalars['Float']>;
  engaging?: Maybe<Scalars['Float']>;
  filled_count?: Maybe<Scalars['Float']>;
  liked?: Maybe<Scalars['Float']>;
  prof_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "aggregate.prof_rating" */
export type Aggregate_Prof_Rating_Variance_Order_By = {
  clear?: InputMaybe<Order_By>;
  comment_count?: InputMaybe<Order_By>;
  engaging?: InputMaybe<Order_By>;
  filled_count?: InputMaybe<Order_By>;
  liked?: InputMaybe<Order_By>;
  prof_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "aggregate.prof_review_rating" */
export type Aggregate_Prof_Review_Rating = {
  __typename?: 'aggregate_prof_review_rating';
  review_id?: Maybe<Scalars['Int']>;
  upvote_count?: Maybe<Scalars['bigint']>;
};

/** aggregated selection of "aggregate.prof_review_rating" */
export type Aggregate_Prof_Review_Rating_Aggregate = {
  __typename?: 'aggregate_prof_review_rating_aggregate';
  aggregate?: Maybe<Aggregate_Prof_Review_Rating_Aggregate_Fields>;
  nodes: Array<Aggregate_Prof_Review_Rating>;
};

/** aggregate fields of "aggregate.prof_review_rating" */
export type Aggregate_Prof_Review_Rating_Aggregate_Fields = {
  __typename?: 'aggregate_prof_review_rating_aggregate_fields';
  avg?: Maybe<Aggregate_Prof_Review_Rating_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Aggregate_Prof_Review_Rating_Max_Fields>;
  min?: Maybe<Aggregate_Prof_Review_Rating_Min_Fields>;
  stddev?: Maybe<Aggregate_Prof_Review_Rating_Stddev_Fields>;
  stddev_pop?: Maybe<Aggregate_Prof_Review_Rating_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Aggregate_Prof_Review_Rating_Stddev_Samp_Fields>;
  sum?: Maybe<Aggregate_Prof_Review_Rating_Sum_Fields>;
  var_pop?: Maybe<Aggregate_Prof_Review_Rating_Var_Pop_Fields>;
  var_samp?: Maybe<Aggregate_Prof_Review_Rating_Var_Samp_Fields>;
  variance?: Maybe<Aggregate_Prof_Review_Rating_Variance_Fields>;
};


/** aggregate fields of "aggregate.prof_review_rating" */
export type Aggregate_Prof_Review_Rating_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Aggregate_Prof_Review_Rating_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "aggregate.prof_review_rating" */
export type Aggregate_Prof_Review_Rating_Aggregate_Order_By = {
  avg?: InputMaybe<Aggregate_Prof_Review_Rating_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Aggregate_Prof_Review_Rating_Max_Order_By>;
  min?: InputMaybe<Aggregate_Prof_Review_Rating_Min_Order_By>;
  stddev?: InputMaybe<Aggregate_Prof_Review_Rating_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Aggregate_Prof_Review_Rating_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Aggregate_Prof_Review_Rating_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Aggregate_Prof_Review_Rating_Sum_Order_By>;
  var_pop?: InputMaybe<Aggregate_Prof_Review_Rating_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Aggregate_Prof_Review_Rating_Var_Samp_Order_By>;
  variance?: InputMaybe<Aggregate_Prof_Review_Rating_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Aggregate_Prof_Review_Rating_Avg_Fields = {
  __typename?: 'aggregate_prof_review_rating_avg_fields';
  review_id?: Maybe<Scalars['Float']>;
  upvote_count?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "aggregate.prof_review_rating" */
export type Aggregate_Prof_Review_Rating_Avg_Order_By = {
  review_id?: InputMaybe<Order_By>;
  upvote_count?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "aggregate.prof_review_rating". All fields are combined with a logical 'AND'. */
export type Aggregate_Prof_Review_Rating_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Aggregate_Prof_Review_Rating_Bool_Exp>>>;
  _not?: InputMaybe<Aggregate_Prof_Review_Rating_Bool_Exp>;
  _or?: InputMaybe<Array<InputMaybe<Aggregate_Prof_Review_Rating_Bool_Exp>>>;
  review_id?: InputMaybe<Int_Comparison_Exp>;
  upvote_count?: InputMaybe<Bigint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Aggregate_Prof_Review_Rating_Max_Fields = {
  __typename?: 'aggregate_prof_review_rating_max_fields';
  review_id?: Maybe<Scalars['Int']>;
  upvote_count?: Maybe<Scalars['bigint']>;
};

/** order by max() on columns of table "aggregate.prof_review_rating" */
export type Aggregate_Prof_Review_Rating_Max_Order_By = {
  review_id?: InputMaybe<Order_By>;
  upvote_count?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Aggregate_Prof_Review_Rating_Min_Fields = {
  __typename?: 'aggregate_prof_review_rating_min_fields';
  review_id?: Maybe<Scalars['Int']>;
  upvote_count?: Maybe<Scalars['bigint']>;
};

/** order by min() on columns of table "aggregate.prof_review_rating" */
export type Aggregate_Prof_Review_Rating_Min_Order_By = {
  review_id?: InputMaybe<Order_By>;
  upvote_count?: InputMaybe<Order_By>;
};

/** ordering options when selecting data from "aggregate.prof_review_rating" */
export type Aggregate_Prof_Review_Rating_Order_By = {
  review_id?: InputMaybe<Order_By>;
  upvote_count?: InputMaybe<Order_By>;
};

/** select columns of table "aggregate.prof_review_rating" */
export enum Aggregate_Prof_Review_Rating_Select_Column {
  /** column name */
  ReviewId = 'review_id',
  /** column name */
  UpvoteCount = 'upvote_count'
}

/** aggregate stddev on columns */
export type Aggregate_Prof_Review_Rating_Stddev_Fields = {
  __typename?: 'aggregate_prof_review_rating_stddev_fields';
  review_id?: Maybe<Scalars['Float']>;
  upvote_count?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "aggregate.prof_review_rating" */
export type Aggregate_Prof_Review_Rating_Stddev_Order_By = {
  review_id?: InputMaybe<Order_By>;
  upvote_count?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Aggregate_Prof_Review_Rating_Stddev_Pop_Fields = {
  __typename?: 'aggregate_prof_review_rating_stddev_pop_fields';
  review_id?: Maybe<Scalars['Float']>;
  upvote_count?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "aggregate.prof_review_rating" */
export type Aggregate_Prof_Review_Rating_Stddev_Pop_Order_By = {
  review_id?: InputMaybe<Order_By>;
  upvote_count?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Aggregate_Prof_Review_Rating_Stddev_Samp_Fields = {
  __typename?: 'aggregate_prof_review_rating_stddev_samp_fields';
  review_id?: Maybe<Scalars['Float']>;
  upvote_count?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "aggregate.prof_review_rating" */
export type Aggregate_Prof_Review_Rating_Stddev_Samp_Order_By = {
  review_id?: InputMaybe<Order_By>;
  upvote_count?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Aggregate_Prof_Review_Rating_Sum_Fields = {
  __typename?: 'aggregate_prof_review_rating_sum_fields';
  review_id?: Maybe<Scalars['Int']>;
  upvote_count?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "aggregate.prof_review_rating" */
export type Aggregate_Prof_Review_Rating_Sum_Order_By = {
  review_id?: InputMaybe<Order_By>;
  upvote_count?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Aggregate_Prof_Review_Rating_Var_Pop_Fields = {
  __typename?: 'aggregate_prof_review_rating_var_pop_fields';
  review_id?: Maybe<Scalars['Float']>;
  upvote_count?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "aggregate.prof_review_rating" */
export type Aggregate_Prof_Review_Rating_Var_Pop_Order_By = {
  review_id?: InputMaybe<Order_By>;
  upvote_count?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Aggregate_Prof_Review_Rating_Var_Samp_Fields = {
  __typename?: 'aggregate_prof_review_rating_var_samp_fields';
  review_id?: Maybe<Scalars['Float']>;
  upvote_count?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "aggregate.prof_review_rating" */
export type Aggregate_Prof_Review_Rating_Var_Samp_Order_By = {
  review_id?: InputMaybe<Order_By>;
  upvote_count?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Aggregate_Prof_Review_Rating_Variance_Fields = {
  __typename?: 'aggregate_prof_review_rating_variance_fields';
  review_id?: Maybe<Scalars['Float']>;
  upvote_count?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "aggregate.prof_review_rating" */
export type Aggregate_Prof_Review_Rating_Variance_Order_By = {
  review_id?: InputMaybe<Order_By>;
  upvote_count?: InputMaybe<Order_By>;
};

/** expression to compare columns of type bigint. All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']>;
  _gt?: InputMaybe<Scalars['bigint']>;
  _gte?: InputMaybe<Scalars['bigint']>;
  _in?: InputMaybe<Array<Scalars['bigint']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['bigint']>;
  _lte?: InputMaybe<Scalars['bigint']>;
  _neq?: InputMaybe<Scalars['bigint']>;
  _nin?: InputMaybe<Array<Scalars['bigint']>>;
};

/** columns and relationships of "course" */
export type Course = {
  __typename?: 'course';
  antireqs?: Maybe<Scalars['String']>;
  /** An array relationship */
  antirequisites: Array<Course_Antirequisite>;
  code: Scalars['String'];
  coreqs?: Maybe<Scalars['String']>;
  /** An array relationship */
  course_easy_buckets: Array<Aggregate_Course_Easy_Buckets>;
  /** An aggregated array relationship */
  course_easy_buckets_aggregate: Aggregate_Course_Easy_Buckets_Aggregate;
  /** An array relationship */
  course_useful_buckets: Array<Aggregate_Course_Useful_Buckets>;
  /** An aggregated array relationship */
  course_useful_buckets_aggregate: Aggregate_Course_Useful_Buckets_Aggregate;
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  /** An array relationship */
  postrequisites: Array<Course_Postrequisite>;
  prereqs?: Maybe<Scalars['String']>;
  /** An array relationship */
  prerequisites: Array<Course_Prerequisite>;
  /** An array relationship */
  profs_teaching: Array<Prof_Teaches_Course>;
  /** An object relationship */
  rating?: Maybe<Aggregate_Course_Rating>;
  /** An array relationship */
  reviews: Array<Review>;
  /** An array relationship */
  sections: Array<Course_Section>;
};


/** columns and relationships of "course" */
export type CourseAntirequisitesArgs = {
  distinct_on?: InputMaybe<Array<Course_Antirequisite_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Course_Antirequisite_Order_By>>;
  where?: InputMaybe<Course_Antirequisite_Bool_Exp>;
};


/** columns and relationships of "course" */
export type CourseCourse_Easy_BucketsArgs = {
  distinct_on?: InputMaybe<Array<Aggregate_Course_Easy_Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Aggregate_Course_Easy_Buckets_Order_By>>;
  where?: InputMaybe<Aggregate_Course_Easy_Buckets_Bool_Exp>;
};


/** columns and relationships of "course" */
export type CourseCourse_Easy_Buckets_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Aggregate_Course_Easy_Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Aggregate_Course_Easy_Buckets_Order_By>>;
  where?: InputMaybe<Aggregate_Course_Easy_Buckets_Bool_Exp>;
};


/** columns and relationships of "course" */
export type CourseCourse_Useful_BucketsArgs = {
  distinct_on?: InputMaybe<Array<Aggregate_Course_Useful_Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Aggregate_Course_Useful_Buckets_Order_By>>;
  where?: InputMaybe<Aggregate_Course_Useful_Buckets_Bool_Exp>;
};


/** columns and relationships of "course" */
export type CourseCourse_Useful_Buckets_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Aggregate_Course_Useful_Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Aggregate_Course_Useful_Buckets_Order_By>>;
  where?: InputMaybe<Aggregate_Course_Useful_Buckets_Bool_Exp>;
};


/** columns and relationships of "course" */
export type CoursePostrequisitesArgs = {
  distinct_on?: InputMaybe<Array<Course_Postrequisite_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Course_Postrequisite_Order_By>>;
  where?: InputMaybe<Course_Postrequisite_Bool_Exp>;
};


/** columns and relationships of "course" */
export type CoursePrerequisitesArgs = {
  distinct_on?: InputMaybe<Array<Course_Prerequisite_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Course_Prerequisite_Order_By>>;
  where?: InputMaybe<Course_Prerequisite_Bool_Exp>;
};


/** columns and relationships of "course" */
export type CourseProfs_TeachingArgs = {
  distinct_on?: InputMaybe<Array<Prof_Teaches_Course_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Prof_Teaches_Course_Order_By>>;
  where?: InputMaybe<Prof_Teaches_Course_Bool_Exp>;
};


/** columns and relationships of "course" */
export type CourseReviewsArgs = {
  distinct_on?: InputMaybe<Array<Review_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Review_Order_By>>;
  where?: InputMaybe<Review_Bool_Exp>;
};


/** columns and relationships of "course" */
export type CourseSectionsArgs = {
  distinct_on?: InputMaybe<Array<Course_Section_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Course_Section_Order_By>>;
  where?: InputMaybe<Course_Section_Bool_Exp>;
};

/** columns and relationships of "course_antirequisite" */
export type Course_Antirequisite = {
  __typename?: 'course_antirequisite';
  /** An object relationship */
  antirequisite?: Maybe<Course>;
  antirequisite_id?: Maybe<Scalars['Int']>;
  /** An object relationship */
  course?: Maybe<Course>;
  course_id?: Maybe<Scalars['Int']>;
};

/** Boolean expression to filter rows from the table "course_antirequisite". All fields are combined with a logical 'AND'. */
export type Course_Antirequisite_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Course_Antirequisite_Bool_Exp>>>;
  _not?: InputMaybe<Course_Antirequisite_Bool_Exp>;
  _or?: InputMaybe<Array<InputMaybe<Course_Antirequisite_Bool_Exp>>>;
  antirequisite?: InputMaybe<Course_Bool_Exp>;
  antirequisite_id?: InputMaybe<Int_Comparison_Exp>;
  course?: InputMaybe<Course_Bool_Exp>;
  course_id?: InputMaybe<Int_Comparison_Exp>;
};

/** ordering options when selecting data from "course_antirequisite" */
export type Course_Antirequisite_Order_By = {
  antirequisite?: InputMaybe<Course_Order_By>;
  antirequisite_id?: InputMaybe<Order_By>;
  course?: InputMaybe<Course_Order_By>;
  course_id?: InputMaybe<Order_By>;
};

/** select columns of table "course_antirequisite" */
export enum Course_Antirequisite_Select_Column {
  /** column name */
  AntirequisiteId = 'antirequisite_id',
  /** column name */
  CourseId = 'course_id'
}

/** Boolean expression to filter rows from the table "course". All fields are combined with a logical 'AND'. */
export type Course_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Course_Bool_Exp>>>;
  _not?: InputMaybe<Course_Bool_Exp>;
  _or?: InputMaybe<Array<InputMaybe<Course_Bool_Exp>>>;
  antireqs?: InputMaybe<String_Comparison_Exp>;
  antirequisites?: InputMaybe<Course_Antirequisite_Bool_Exp>;
  code?: InputMaybe<String_Comparison_Exp>;
  coreqs?: InputMaybe<String_Comparison_Exp>;
  course_easy_buckets?: InputMaybe<Aggregate_Course_Easy_Buckets_Bool_Exp>;
  course_useful_buckets?: InputMaybe<Aggregate_Course_Useful_Buckets_Bool_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  postrequisites?: InputMaybe<Course_Postrequisite_Bool_Exp>;
  prereqs?: InputMaybe<String_Comparison_Exp>;
  prerequisites?: InputMaybe<Course_Prerequisite_Bool_Exp>;
  profs_teaching?: InputMaybe<Prof_Teaches_Course_Bool_Exp>;
  rating?: InputMaybe<Aggregate_Course_Rating_Bool_Exp>;
  reviews?: InputMaybe<Review_Bool_Exp>;
  sections?: InputMaybe<Course_Section_Bool_Exp>;
};

/** ordering options when selecting data from "course" */
export type Course_Order_By = {
  antireqs?: InputMaybe<Order_By>;
  code?: InputMaybe<Order_By>;
  coreqs?: InputMaybe<Order_By>;
  course_easy_buckets_aggregate?: InputMaybe<Aggregate_Course_Easy_Buckets_Aggregate_Order_By>;
  course_useful_buckets_aggregate?: InputMaybe<Aggregate_Course_Useful_Buckets_Aggregate_Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  prereqs?: InputMaybe<Order_By>;
  rating?: InputMaybe<Aggregate_Course_Rating_Order_By>;
};

/** primary key columns input for table: "course" */
export type Course_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** columns and relationships of "course_postrequisite" */
export type Course_Postrequisite = {
  __typename?: 'course_postrequisite';
  /** An object relationship */
  course?: Maybe<Course>;
  course_id?: Maybe<Scalars['Int']>;
  is_corequisite?: Maybe<Scalars['Boolean']>;
  /** An object relationship */
  postrequisite?: Maybe<Course>;
  postrequisite_id?: Maybe<Scalars['Int']>;
};

/** Boolean expression to filter rows from the table "course_postrequisite". All fields are combined with a logical 'AND'. */
export type Course_Postrequisite_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Course_Postrequisite_Bool_Exp>>>;
  _not?: InputMaybe<Course_Postrequisite_Bool_Exp>;
  _or?: InputMaybe<Array<InputMaybe<Course_Postrequisite_Bool_Exp>>>;
  course?: InputMaybe<Course_Bool_Exp>;
  course_id?: InputMaybe<Int_Comparison_Exp>;
  is_corequisite?: InputMaybe<Boolean_Comparison_Exp>;
  postrequisite?: InputMaybe<Course_Bool_Exp>;
  postrequisite_id?: InputMaybe<Int_Comparison_Exp>;
};

/** ordering options when selecting data from "course_postrequisite" */
export type Course_Postrequisite_Order_By = {
  course?: InputMaybe<Course_Order_By>;
  course_id?: InputMaybe<Order_By>;
  is_corequisite?: InputMaybe<Order_By>;
  postrequisite?: InputMaybe<Course_Order_By>;
  postrequisite_id?: InputMaybe<Order_By>;
};

/** select columns of table "course_postrequisite" */
export enum Course_Postrequisite_Select_Column {
  /** column name */
  CourseId = 'course_id',
  /** column name */
  IsCorequisite = 'is_corequisite',
  /** column name */
  PostrequisiteId = 'postrequisite_id'
}

/** columns and relationships of "course_prerequisite" */
export type Course_Prerequisite = {
  __typename?: 'course_prerequisite';
  /** An object relationship */
  course?: Maybe<Course>;
  course_id?: Maybe<Scalars['Int']>;
  is_corequisite: Scalars['Boolean'];
  /** An object relationship */
  prerequisite?: Maybe<Course>;
  prerequisite_id?: Maybe<Scalars['Int']>;
};

/** Boolean expression to filter rows from the table "course_prerequisite". All fields are combined with a logical 'AND'. */
export type Course_Prerequisite_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Course_Prerequisite_Bool_Exp>>>;
  _not?: InputMaybe<Course_Prerequisite_Bool_Exp>;
  _or?: InputMaybe<Array<InputMaybe<Course_Prerequisite_Bool_Exp>>>;
  course?: InputMaybe<Course_Bool_Exp>;
  course_id?: InputMaybe<Int_Comparison_Exp>;
  is_corequisite?: InputMaybe<Boolean_Comparison_Exp>;
  prerequisite?: InputMaybe<Course_Bool_Exp>;
  prerequisite_id?: InputMaybe<Int_Comparison_Exp>;
};

/** ordering options when selecting data from "course_prerequisite" */
export type Course_Prerequisite_Order_By = {
  course?: InputMaybe<Course_Order_By>;
  course_id?: InputMaybe<Order_By>;
  is_corequisite?: InputMaybe<Order_By>;
  prerequisite?: InputMaybe<Course_Order_By>;
  prerequisite_id?: InputMaybe<Order_By>;
};

/** select columns of table "course_prerequisite" */
export enum Course_Prerequisite_Select_Column {
  /** column name */
  CourseId = 'course_id',
  /** column name */
  IsCorequisite = 'is_corequisite',
  /** column name */
  PrerequisiteId = 'prerequisite_id'
}

/** columns and relationships of "course_search_index" */
export type Course_Search_Index = {
  __typename?: 'course_search_index';
  code?: Maybe<Scalars['String']>;
  course_id?: Maybe<Scalars['Int']>;
  easy?: Maybe<Scalars['numeric']>;
  has_prereqs?: Maybe<Scalars['Boolean']>;
  liked?: Maybe<Scalars['numeric']>;
  name?: Maybe<Scalars['String']>;
  prof_ids?: Maybe<Scalars['_int4']>;
  ratings?: Maybe<Scalars['bigint']>;
  terms?: Maybe<Scalars['_int4']>;
  useful?: Maybe<Scalars['numeric']>;
};

/** aggregated selection of "course_search_index" */
export type Course_Search_Index_Aggregate = {
  __typename?: 'course_search_index_aggregate';
  aggregate?: Maybe<Course_Search_Index_Aggregate_Fields>;
  nodes: Array<Course_Search_Index>;
};

/** aggregate fields of "course_search_index" */
export type Course_Search_Index_Aggregate_Fields = {
  __typename?: 'course_search_index_aggregate_fields';
  avg?: Maybe<Course_Search_Index_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Course_Search_Index_Max_Fields>;
  min?: Maybe<Course_Search_Index_Min_Fields>;
  stddev?: Maybe<Course_Search_Index_Stddev_Fields>;
  stddev_pop?: Maybe<Course_Search_Index_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Course_Search_Index_Stddev_Samp_Fields>;
  sum?: Maybe<Course_Search_Index_Sum_Fields>;
  var_pop?: Maybe<Course_Search_Index_Var_Pop_Fields>;
  var_samp?: Maybe<Course_Search_Index_Var_Samp_Fields>;
  variance?: Maybe<Course_Search_Index_Variance_Fields>;
};


/** aggregate fields of "course_search_index" */
export type Course_Search_Index_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Course_Search_Index_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "course_search_index" */
export type Course_Search_Index_Aggregate_Order_By = {
  avg?: InputMaybe<Course_Search_Index_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Course_Search_Index_Max_Order_By>;
  min?: InputMaybe<Course_Search_Index_Min_Order_By>;
  stddev?: InputMaybe<Course_Search_Index_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Course_Search_Index_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Course_Search_Index_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Course_Search_Index_Sum_Order_By>;
  var_pop?: InputMaybe<Course_Search_Index_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Course_Search_Index_Var_Samp_Order_By>;
  variance?: InputMaybe<Course_Search_Index_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Course_Search_Index_Avg_Fields = {
  __typename?: 'course_search_index_avg_fields';
  course_id?: Maybe<Scalars['Float']>;
  easy?: Maybe<Scalars['Float']>;
  liked?: Maybe<Scalars['Float']>;
  ratings?: Maybe<Scalars['Float']>;
  useful?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "course_search_index" */
export type Course_Search_Index_Avg_Order_By = {
  course_id?: InputMaybe<Order_By>;
  easy?: InputMaybe<Order_By>;
  liked?: InputMaybe<Order_By>;
  ratings?: InputMaybe<Order_By>;
  useful?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "course_search_index". All fields are combined with a logical 'AND'. */
export type Course_Search_Index_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Course_Search_Index_Bool_Exp>>>;
  _not?: InputMaybe<Course_Search_Index_Bool_Exp>;
  _or?: InputMaybe<Array<InputMaybe<Course_Search_Index_Bool_Exp>>>;
  code?: InputMaybe<String_Comparison_Exp>;
  course_id?: InputMaybe<Int_Comparison_Exp>;
  easy?: InputMaybe<Numeric_Comparison_Exp>;
  has_prereqs?: InputMaybe<Boolean_Comparison_Exp>;
  liked?: InputMaybe<Numeric_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  prof_ids?: InputMaybe<_Int4_Comparison_Exp>;
  ratings?: InputMaybe<Bigint_Comparison_Exp>;
  terms?: InputMaybe<_Int4_Comparison_Exp>;
  useful?: InputMaybe<Numeric_Comparison_Exp>;
};

/** aggregate max on columns */
export type Course_Search_Index_Max_Fields = {
  __typename?: 'course_search_index_max_fields';
  code?: Maybe<Scalars['String']>;
  course_id?: Maybe<Scalars['Int']>;
  easy?: Maybe<Scalars['numeric']>;
  liked?: Maybe<Scalars['numeric']>;
  name?: Maybe<Scalars['String']>;
  ratings?: Maybe<Scalars['bigint']>;
  useful?: Maybe<Scalars['numeric']>;
};

/** order by max() on columns of table "course_search_index" */
export type Course_Search_Index_Max_Order_By = {
  code?: InputMaybe<Order_By>;
  course_id?: InputMaybe<Order_By>;
  easy?: InputMaybe<Order_By>;
  liked?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  ratings?: InputMaybe<Order_By>;
  useful?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Course_Search_Index_Min_Fields = {
  __typename?: 'course_search_index_min_fields';
  code?: Maybe<Scalars['String']>;
  course_id?: Maybe<Scalars['Int']>;
  easy?: Maybe<Scalars['numeric']>;
  liked?: Maybe<Scalars['numeric']>;
  name?: Maybe<Scalars['String']>;
  ratings?: Maybe<Scalars['bigint']>;
  useful?: Maybe<Scalars['numeric']>;
};

/** order by min() on columns of table "course_search_index" */
export type Course_Search_Index_Min_Order_By = {
  code?: InputMaybe<Order_By>;
  course_id?: InputMaybe<Order_By>;
  easy?: InputMaybe<Order_By>;
  liked?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  ratings?: InputMaybe<Order_By>;
  useful?: InputMaybe<Order_By>;
};

/** ordering options when selecting data from "course_search_index" */
export type Course_Search_Index_Order_By = {
  code?: InputMaybe<Order_By>;
  course_id?: InputMaybe<Order_By>;
  easy?: InputMaybe<Order_By>;
  has_prereqs?: InputMaybe<Order_By>;
  liked?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  prof_ids?: InputMaybe<Order_By>;
  ratings?: InputMaybe<Order_By>;
  terms?: InputMaybe<Order_By>;
  useful?: InputMaybe<Order_By>;
};

/** select columns of table "course_search_index" */
export enum Course_Search_Index_Select_Column {
  /** column name */
  Code = 'code',
  /** column name */
  CourseId = 'course_id',
  /** column name */
  Easy = 'easy',
  /** column name */
  HasPrereqs = 'has_prereqs',
  /** column name */
  Liked = 'liked',
  /** column name */
  Name = 'name',
  /** column name */
  ProfIds = 'prof_ids',
  /** column name */
  Ratings = 'ratings',
  /** column name */
  Terms = 'terms',
  /** column name */
  Useful = 'useful'
}

/** aggregate stddev on columns */
export type Course_Search_Index_Stddev_Fields = {
  __typename?: 'course_search_index_stddev_fields';
  course_id?: Maybe<Scalars['Float']>;
  easy?: Maybe<Scalars['Float']>;
  liked?: Maybe<Scalars['Float']>;
  ratings?: Maybe<Scalars['Float']>;
  useful?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "course_search_index" */
export type Course_Search_Index_Stddev_Order_By = {
  course_id?: InputMaybe<Order_By>;
  easy?: InputMaybe<Order_By>;
  liked?: InputMaybe<Order_By>;
  ratings?: InputMaybe<Order_By>;
  useful?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Course_Search_Index_Stddev_Pop_Fields = {
  __typename?: 'course_search_index_stddev_pop_fields';
  course_id?: Maybe<Scalars['Float']>;
  easy?: Maybe<Scalars['Float']>;
  liked?: Maybe<Scalars['Float']>;
  ratings?: Maybe<Scalars['Float']>;
  useful?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "course_search_index" */
export type Course_Search_Index_Stddev_Pop_Order_By = {
  course_id?: InputMaybe<Order_By>;
  easy?: InputMaybe<Order_By>;
  liked?: InputMaybe<Order_By>;
  ratings?: InputMaybe<Order_By>;
  useful?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Course_Search_Index_Stddev_Samp_Fields = {
  __typename?: 'course_search_index_stddev_samp_fields';
  course_id?: Maybe<Scalars['Float']>;
  easy?: Maybe<Scalars['Float']>;
  liked?: Maybe<Scalars['Float']>;
  ratings?: Maybe<Scalars['Float']>;
  useful?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "course_search_index" */
export type Course_Search_Index_Stddev_Samp_Order_By = {
  course_id?: InputMaybe<Order_By>;
  easy?: InputMaybe<Order_By>;
  liked?: InputMaybe<Order_By>;
  ratings?: InputMaybe<Order_By>;
  useful?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Course_Search_Index_Sum_Fields = {
  __typename?: 'course_search_index_sum_fields';
  course_id?: Maybe<Scalars['Int']>;
  easy?: Maybe<Scalars['numeric']>;
  liked?: Maybe<Scalars['numeric']>;
  ratings?: Maybe<Scalars['bigint']>;
  useful?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "course_search_index" */
export type Course_Search_Index_Sum_Order_By = {
  course_id?: InputMaybe<Order_By>;
  easy?: InputMaybe<Order_By>;
  liked?: InputMaybe<Order_By>;
  ratings?: InputMaybe<Order_By>;
  useful?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Course_Search_Index_Var_Pop_Fields = {
  __typename?: 'course_search_index_var_pop_fields';
  course_id?: Maybe<Scalars['Float']>;
  easy?: Maybe<Scalars['Float']>;
  liked?: Maybe<Scalars['Float']>;
  ratings?: Maybe<Scalars['Float']>;
  useful?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "course_search_index" */
export type Course_Search_Index_Var_Pop_Order_By = {
  course_id?: InputMaybe<Order_By>;
  easy?: InputMaybe<Order_By>;
  liked?: InputMaybe<Order_By>;
  ratings?: InputMaybe<Order_By>;
  useful?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Course_Search_Index_Var_Samp_Fields = {
  __typename?: 'course_search_index_var_samp_fields';
  course_id?: Maybe<Scalars['Float']>;
  easy?: Maybe<Scalars['Float']>;
  liked?: Maybe<Scalars['Float']>;
  ratings?: Maybe<Scalars['Float']>;
  useful?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "course_search_index" */
export type Course_Search_Index_Var_Samp_Order_By = {
  course_id?: InputMaybe<Order_By>;
  easy?: InputMaybe<Order_By>;
  liked?: InputMaybe<Order_By>;
  ratings?: InputMaybe<Order_By>;
  useful?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Course_Search_Index_Variance_Fields = {
  __typename?: 'course_search_index_variance_fields';
  course_id?: Maybe<Scalars['Float']>;
  easy?: Maybe<Scalars['Float']>;
  liked?: Maybe<Scalars['Float']>;
  ratings?: Maybe<Scalars['Float']>;
  useful?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "course_search_index" */
export type Course_Search_Index_Variance_Order_By = {
  course_id?: InputMaybe<Order_By>;
  easy?: InputMaybe<Order_By>;
  liked?: InputMaybe<Order_By>;
  ratings?: InputMaybe<Order_By>;
  useful?: InputMaybe<Order_By>;
};

/** columns and relationships of "course_section" */
export type Course_Section = {
  __typename?: 'course_section';
  class_number: Scalars['Int'];
  /** An object relationship */
  course: Course;
  course_id: Scalars['Int'];
  enrollment_capacity: Scalars['Int'];
  enrollment_total: Scalars['Int'];
  /** An array relationship */
  exams: Array<Section_Exam>;
  id: Scalars['Int'];
  /** An array relationship */
  meetings: Array<Section_Meeting>;
  section_name: Scalars['String'];
  term_id: Scalars['Int'];
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "course_section" */
export type Course_SectionExamsArgs = {
  distinct_on?: InputMaybe<Array<Section_Exam_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Section_Exam_Order_By>>;
  where?: InputMaybe<Section_Exam_Bool_Exp>;
};


/** columns and relationships of "course_section" */
export type Course_SectionMeetingsArgs = {
  distinct_on?: InputMaybe<Array<Section_Meeting_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Section_Meeting_Order_By>>;
  where?: InputMaybe<Section_Meeting_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "course_section". All fields are combined with a logical 'AND'. */
export type Course_Section_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Course_Section_Bool_Exp>>>;
  _not?: InputMaybe<Course_Section_Bool_Exp>;
  _or?: InputMaybe<Array<InputMaybe<Course_Section_Bool_Exp>>>;
  class_number?: InputMaybe<Int_Comparison_Exp>;
  course?: InputMaybe<Course_Bool_Exp>;
  course_id?: InputMaybe<Int_Comparison_Exp>;
  enrollment_capacity?: InputMaybe<Int_Comparison_Exp>;
  enrollment_total?: InputMaybe<Int_Comparison_Exp>;
  exams?: InputMaybe<Section_Exam_Bool_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  meetings?: InputMaybe<Section_Meeting_Bool_Exp>;
  section_name?: InputMaybe<String_Comparison_Exp>;
  term_id?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** ordering options when selecting data from "course_section" */
export type Course_Section_Order_By = {
  class_number?: InputMaybe<Order_By>;
  course?: InputMaybe<Course_Order_By>;
  course_id?: InputMaybe<Order_By>;
  enrollment_capacity?: InputMaybe<Order_By>;
  enrollment_total?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  section_name?: InputMaybe<Order_By>;
  term_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: "course_section" */
export type Course_Section_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "course_section" */
export enum Course_Section_Select_Column {
  /** column name */
  ClassNumber = 'class_number',
  /** column name */
  CourseId = 'course_id',
  /** column name */
  EnrollmentCapacity = 'enrollment_capacity',
  /** column name */
  EnrollmentTotal = 'enrollment_total',
  /** column name */
  Id = 'id',
  /** column name */
  SectionName = 'section_name',
  /** column name */
  TermId = 'term_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** select columns of table "course" */
export enum Course_Select_Column {
  /** column name */
  Antireqs = 'antireqs',
  /** column name */
  Code = 'code',
  /** column name */
  Coreqs = 'coreqs',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Prereqs = 'prereqs'
}

/** expression to compare columns of type date. All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']>;
  _gt?: InputMaybe<Scalars['date']>;
  _gte?: InputMaybe<Scalars['date']>;
  _in?: InputMaybe<Array<Scalars['date']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['date']>;
  _lte?: InputMaybe<Scalars['date']>;
  _neq?: InputMaybe<Scalars['date']>;
  _nin?: InputMaybe<Array<Scalars['date']>>;
};

/** expression to compare columns of type numeric. All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']>;
  _gt?: InputMaybe<Scalars['numeric']>;
  _gte?: InputMaybe<Scalars['numeric']>;
  _in?: InputMaybe<Array<Scalars['numeric']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['numeric']>;
  _lte?: InputMaybe<Scalars['numeric']>;
  _neq?: InputMaybe<Scalars['numeric']>;
  _nin?: InputMaybe<Array<Scalars['numeric']>>;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "prof" */
export type Prof = {
  __typename?: 'prof';
  code: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  picture_url?: Maybe<Scalars['String']>;
  /** An array relationship */
  prof_clear_buckets: Array<Aggregate_Prof_Clear_Buckets>;
  /** An aggregated array relationship */
  prof_clear_buckets_aggregate: Aggregate_Prof_Clear_Buckets_Aggregate;
  /** An array relationship */
  prof_courses: Array<Prof_Teaches_Course>;
  /** An array relationship */
  prof_engaging_buckets: Array<Aggregate_Prof_Engaging_Buckets>;
  /** An aggregated array relationship */
  prof_engaging_buckets_aggregate: Aggregate_Prof_Engaging_Buckets_Aggregate;
  /** An object relationship */
  rating?: Maybe<Aggregate_Prof_Rating>;
  /** An array relationship */
  reviews: Array<Review>;
};


/** columns and relationships of "prof" */
export type ProfProf_Clear_BucketsArgs = {
  distinct_on?: InputMaybe<Array<Aggregate_Prof_Clear_Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Aggregate_Prof_Clear_Buckets_Order_By>>;
  where?: InputMaybe<Aggregate_Prof_Clear_Buckets_Bool_Exp>;
};


/** columns and relationships of "prof" */
export type ProfProf_Clear_Buckets_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Aggregate_Prof_Clear_Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Aggregate_Prof_Clear_Buckets_Order_By>>;
  where?: InputMaybe<Aggregate_Prof_Clear_Buckets_Bool_Exp>;
};


/** columns and relationships of "prof" */
export type ProfProf_CoursesArgs = {
  distinct_on?: InputMaybe<Array<Prof_Teaches_Course_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Prof_Teaches_Course_Order_By>>;
  where?: InputMaybe<Prof_Teaches_Course_Bool_Exp>;
};


/** columns and relationships of "prof" */
export type ProfProf_Engaging_BucketsArgs = {
  distinct_on?: InputMaybe<Array<Aggregate_Prof_Engaging_Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Aggregate_Prof_Engaging_Buckets_Order_By>>;
  where?: InputMaybe<Aggregate_Prof_Engaging_Buckets_Bool_Exp>;
};


/** columns and relationships of "prof" */
export type ProfProf_Engaging_Buckets_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Aggregate_Prof_Engaging_Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Aggregate_Prof_Engaging_Buckets_Order_By>>;
  where?: InputMaybe<Aggregate_Prof_Engaging_Buckets_Bool_Exp>;
};


/** columns and relationships of "prof" */
export type ProfReviewsArgs = {
  distinct_on?: InputMaybe<Array<Review_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Review_Order_By>>;
  where?: InputMaybe<Review_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "prof". All fields are combined with a logical 'AND'. */
export type Prof_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Prof_Bool_Exp>>>;
  _not?: InputMaybe<Prof_Bool_Exp>;
  _or?: InputMaybe<Array<InputMaybe<Prof_Bool_Exp>>>;
  code?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  picture_url?: InputMaybe<String_Comparison_Exp>;
  prof_clear_buckets?: InputMaybe<Aggregate_Prof_Clear_Buckets_Bool_Exp>;
  prof_courses?: InputMaybe<Prof_Teaches_Course_Bool_Exp>;
  prof_engaging_buckets?: InputMaybe<Aggregate_Prof_Engaging_Buckets_Bool_Exp>;
  rating?: InputMaybe<Aggregate_Prof_Rating_Bool_Exp>;
  reviews?: InputMaybe<Review_Bool_Exp>;
};

/** ordering options when selecting data from "prof" */
export type Prof_Order_By = {
  code?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  picture_url?: InputMaybe<Order_By>;
  prof_clear_buckets_aggregate?: InputMaybe<Aggregate_Prof_Clear_Buckets_Aggregate_Order_By>;
  prof_engaging_buckets_aggregate?: InputMaybe<Aggregate_Prof_Engaging_Buckets_Aggregate_Order_By>;
  rating?: InputMaybe<Aggregate_Prof_Rating_Order_By>;
};

/** primary key columns input for table: "prof" */
export type Prof_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** columns and relationships of "prof_search_index" */
export type Prof_Search_Index = {
  __typename?: 'prof_search_index';
  clear?: Maybe<Scalars['numeric']>;
  code?: Maybe<Scalars['String']>;
  course_codes?: Maybe<Scalars['_text']>;
  course_ids?: Maybe<Scalars['_int4']>;
  engaging?: Maybe<Scalars['numeric']>;
  liked?: Maybe<Scalars['numeric']>;
  name?: Maybe<Scalars['String']>;
  prof_id?: Maybe<Scalars['Int']>;
  ratings?: Maybe<Scalars['bigint']>;
};

/** aggregated selection of "prof_search_index" */
export type Prof_Search_Index_Aggregate = {
  __typename?: 'prof_search_index_aggregate';
  aggregate?: Maybe<Prof_Search_Index_Aggregate_Fields>;
  nodes: Array<Prof_Search_Index>;
};

/** aggregate fields of "prof_search_index" */
export type Prof_Search_Index_Aggregate_Fields = {
  __typename?: 'prof_search_index_aggregate_fields';
  avg?: Maybe<Prof_Search_Index_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Prof_Search_Index_Max_Fields>;
  min?: Maybe<Prof_Search_Index_Min_Fields>;
  stddev?: Maybe<Prof_Search_Index_Stddev_Fields>;
  stddev_pop?: Maybe<Prof_Search_Index_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Prof_Search_Index_Stddev_Samp_Fields>;
  sum?: Maybe<Prof_Search_Index_Sum_Fields>;
  var_pop?: Maybe<Prof_Search_Index_Var_Pop_Fields>;
  var_samp?: Maybe<Prof_Search_Index_Var_Samp_Fields>;
  variance?: Maybe<Prof_Search_Index_Variance_Fields>;
};


/** aggregate fields of "prof_search_index" */
export type Prof_Search_Index_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Prof_Search_Index_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "prof_search_index" */
export type Prof_Search_Index_Aggregate_Order_By = {
  avg?: InputMaybe<Prof_Search_Index_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Prof_Search_Index_Max_Order_By>;
  min?: InputMaybe<Prof_Search_Index_Min_Order_By>;
  stddev?: InputMaybe<Prof_Search_Index_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Prof_Search_Index_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Prof_Search_Index_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Prof_Search_Index_Sum_Order_By>;
  var_pop?: InputMaybe<Prof_Search_Index_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Prof_Search_Index_Var_Samp_Order_By>;
  variance?: InputMaybe<Prof_Search_Index_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Prof_Search_Index_Avg_Fields = {
  __typename?: 'prof_search_index_avg_fields';
  clear?: Maybe<Scalars['Float']>;
  engaging?: Maybe<Scalars['Float']>;
  liked?: Maybe<Scalars['Float']>;
  prof_id?: Maybe<Scalars['Float']>;
  ratings?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "prof_search_index" */
export type Prof_Search_Index_Avg_Order_By = {
  clear?: InputMaybe<Order_By>;
  engaging?: InputMaybe<Order_By>;
  liked?: InputMaybe<Order_By>;
  prof_id?: InputMaybe<Order_By>;
  ratings?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "prof_search_index". All fields are combined with a logical 'AND'. */
export type Prof_Search_Index_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Prof_Search_Index_Bool_Exp>>>;
  _not?: InputMaybe<Prof_Search_Index_Bool_Exp>;
  _or?: InputMaybe<Array<InputMaybe<Prof_Search_Index_Bool_Exp>>>;
  clear?: InputMaybe<Numeric_Comparison_Exp>;
  code?: InputMaybe<String_Comparison_Exp>;
  course_codes?: InputMaybe<_Text_Comparison_Exp>;
  course_ids?: InputMaybe<_Int4_Comparison_Exp>;
  engaging?: InputMaybe<Numeric_Comparison_Exp>;
  liked?: InputMaybe<Numeric_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  prof_id?: InputMaybe<Int_Comparison_Exp>;
  ratings?: InputMaybe<Bigint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Prof_Search_Index_Max_Fields = {
  __typename?: 'prof_search_index_max_fields';
  clear?: Maybe<Scalars['numeric']>;
  code?: Maybe<Scalars['String']>;
  engaging?: Maybe<Scalars['numeric']>;
  liked?: Maybe<Scalars['numeric']>;
  name?: Maybe<Scalars['String']>;
  prof_id?: Maybe<Scalars['Int']>;
  ratings?: Maybe<Scalars['bigint']>;
};

/** order by max() on columns of table "prof_search_index" */
export type Prof_Search_Index_Max_Order_By = {
  clear?: InputMaybe<Order_By>;
  code?: InputMaybe<Order_By>;
  engaging?: InputMaybe<Order_By>;
  liked?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  prof_id?: InputMaybe<Order_By>;
  ratings?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Prof_Search_Index_Min_Fields = {
  __typename?: 'prof_search_index_min_fields';
  clear?: Maybe<Scalars['numeric']>;
  code?: Maybe<Scalars['String']>;
  engaging?: Maybe<Scalars['numeric']>;
  liked?: Maybe<Scalars['numeric']>;
  name?: Maybe<Scalars['String']>;
  prof_id?: Maybe<Scalars['Int']>;
  ratings?: Maybe<Scalars['bigint']>;
};

/** order by min() on columns of table "prof_search_index" */
export type Prof_Search_Index_Min_Order_By = {
  clear?: InputMaybe<Order_By>;
  code?: InputMaybe<Order_By>;
  engaging?: InputMaybe<Order_By>;
  liked?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  prof_id?: InputMaybe<Order_By>;
  ratings?: InputMaybe<Order_By>;
};

/** ordering options when selecting data from "prof_search_index" */
export type Prof_Search_Index_Order_By = {
  clear?: InputMaybe<Order_By>;
  code?: InputMaybe<Order_By>;
  course_codes?: InputMaybe<Order_By>;
  course_ids?: InputMaybe<Order_By>;
  engaging?: InputMaybe<Order_By>;
  liked?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  prof_id?: InputMaybe<Order_By>;
  ratings?: InputMaybe<Order_By>;
};

/** select columns of table "prof_search_index" */
export enum Prof_Search_Index_Select_Column {
  /** column name */
  Clear = 'clear',
  /** column name */
  Code = 'code',
  /** column name */
  CourseCodes = 'course_codes',
  /** column name */
  CourseIds = 'course_ids',
  /** column name */
  Engaging = 'engaging',
  /** column name */
  Liked = 'liked',
  /** column name */
  Name = 'name',
  /** column name */
  ProfId = 'prof_id',
  /** column name */
  Ratings = 'ratings'
}

/** aggregate stddev on columns */
export type Prof_Search_Index_Stddev_Fields = {
  __typename?: 'prof_search_index_stddev_fields';
  clear?: Maybe<Scalars['Float']>;
  engaging?: Maybe<Scalars['Float']>;
  liked?: Maybe<Scalars['Float']>;
  prof_id?: Maybe<Scalars['Float']>;
  ratings?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "prof_search_index" */
export type Prof_Search_Index_Stddev_Order_By = {
  clear?: InputMaybe<Order_By>;
  engaging?: InputMaybe<Order_By>;
  liked?: InputMaybe<Order_By>;
  prof_id?: InputMaybe<Order_By>;
  ratings?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Prof_Search_Index_Stddev_Pop_Fields = {
  __typename?: 'prof_search_index_stddev_pop_fields';
  clear?: Maybe<Scalars['Float']>;
  engaging?: Maybe<Scalars['Float']>;
  liked?: Maybe<Scalars['Float']>;
  prof_id?: Maybe<Scalars['Float']>;
  ratings?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "prof_search_index" */
export type Prof_Search_Index_Stddev_Pop_Order_By = {
  clear?: InputMaybe<Order_By>;
  engaging?: InputMaybe<Order_By>;
  liked?: InputMaybe<Order_By>;
  prof_id?: InputMaybe<Order_By>;
  ratings?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Prof_Search_Index_Stddev_Samp_Fields = {
  __typename?: 'prof_search_index_stddev_samp_fields';
  clear?: Maybe<Scalars['Float']>;
  engaging?: Maybe<Scalars['Float']>;
  liked?: Maybe<Scalars['Float']>;
  prof_id?: Maybe<Scalars['Float']>;
  ratings?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "prof_search_index" */
export type Prof_Search_Index_Stddev_Samp_Order_By = {
  clear?: InputMaybe<Order_By>;
  engaging?: InputMaybe<Order_By>;
  liked?: InputMaybe<Order_By>;
  prof_id?: InputMaybe<Order_By>;
  ratings?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Prof_Search_Index_Sum_Fields = {
  __typename?: 'prof_search_index_sum_fields';
  clear?: Maybe<Scalars['numeric']>;
  engaging?: Maybe<Scalars['numeric']>;
  liked?: Maybe<Scalars['numeric']>;
  prof_id?: Maybe<Scalars['Int']>;
  ratings?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "prof_search_index" */
export type Prof_Search_Index_Sum_Order_By = {
  clear?: InputMaybe<Order_By>;
  engaging?: InputMaybe<Order_By>;
  liked?: InputMaybe<Order_By>;
  prof_id?: InputMaybe<Order_By>;
  ratings?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Prof_Search_Index_Var_Pop_Fields = {
  __typename?: 'prof_search_index_var_pop_fields';
  clear?: Maybe<Scalars['Float']>;
  engaging?: Maybe<Scalars['Float']>;
  liked?: Maybe<Scalars['Float']>;
  prof_id?: Maybe<Scalars['Float']>;
  ratings?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "prof_search_index" */
export type Prof_Search_Index_Var_Pop_Order_By = {
  clear?: InputMaybe<Order_By>;
  engaging?: InputMaybe<Order_By>;
  liked?: InputMaybe<Order_By>;
  prof_id?: InputMaybe<Order_By>;
  ratings?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Prof_Search_Index_Var_Samp_Fields = {
  __typename?: 'prof_search_index_var_samp_fields';
  clear?: Maybe<Scalars['Float']>;
  engaging?: Maybe<Scalars['Float']>;
  liked?: Maybe<Scalars['Float']>;
  prof_id?: Maybe<Scalars['Float']>;
  ratings?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "prof_search_index" */
export type Prof_Search_Index_Var_Samp_Order_By = {
  clear?: InputMaybe<Order_By>;
  engaging?: InputMaybe<Order_By>;
  liked?: InputMaybe<Order_By>;
  prof_id?: InputMaybe<Order_By>;
  ratings?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Prof_Search_Index_Variance_Fields = {
  __typename?: 'prof_search_index_variance_fields';
  clear?: Maybe<Scalars['Float']>;
  engaging?: Maybe<Scalars['Float']>;
  liked?: Maybe<Scalars['Float']>;
  prof_id?: Maybe<Scalars['Float']>;
  ratings?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "prof_search_index" */
export type Prof_Search_Index_Variance_Order_By = {
  clear?: InputMaybe<Order_By>;
  engaging?: InputMaybe<Order_By>;
  liked?: InputMaybe<Order_By>;
  prof_id?: InputMaybe<Order_By>;
  ratings?: InputMaybe<Order_By>;
};

/** select columns of table "prof" */
export enum Prof_Select_Column {
  /** column name */
  Code = 'code',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  PictureUrl = 'picture_url'
}

/** columns and relationships of "prof_teaches_course" */
export type Prof_Teaches_Course = {
  __typename?: 'prof_teaches_course';
  /** An object relationship */
  course?: Maybe<Course>;
  course_id?: Maybe<Scalars['Int']>;
  /** An object relationship */
  prof?: Maybe<Prof>;
  prof_id?: Maybe<Scalars['Int']>;
};

/** Boolean expression to filter rows from the table "prof_teaches_course". All fields are combined with a logical 'AND'. */
export type Prof_Teaches_Course_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Prof_Teaches_Course_Bool_Exp>>>;
  _not?: InputMaybe<Prof_Teaches_Course_Bool_Exp>;
  _or?: InputMaybe<Array<InputMaybe<Prof_Teaches_Course_Bool_Exp>>>;
  course?: InputMaybe<Course_Bool_Exp>;
  course_id?: InputMaybe<Int_Comparison_Exp>;
  prof?: InputMaybe<Prof_Bool_Exp>;
  prof_id?: InputMaybe<Int_Comparison_Exp>;
};

/** ordering options when selecting data from "prof_teaches_course" */
export type Prof_Teaches_Course_Order_By = {
  course?: InputMaybe<Course_Order_By>;
  course_id?: InputMaybe<Order_By>;
  prof?: InputMaybe<Prof_Order_By>;
  prof_id?: InputMaybe<Order_By>;
};

/** select columns of table "prof_teaches_course" */
export enum Prof_Teaches_Course_Select_Column {
  /** column name */
  CourseId = 'course_id',
  /** column name */
  ProfId = 'prof_id'
}

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "aggregate.course_easy_buckets" */
  aggregate_course_easy_buckets: Array<Aggregate_Course_Easy_Buckets>;
  /** fetch aggregated fields from the table: "aggregate.course_easy_buckets" */
  aggregate_course_easy_buckets_aggregate: Aggregate_Course_Easy_Buckets_Aggregate;
  /** fetch data from the table: "aggregate.course_rating" */
  aggregate_course_rating: Array<Aggregate_Course_Rating>;
  /** fetch aggregated fields from the table: "aggregate.course_rating" */
  aggregate_course_rating_aggregate: Aggregate_Course_Rating_Aggregate;
  /** fetch data from the table: "aggregate.course_review_rating" */
  aggregate_course_review_rating: Array<Aggregate_Course_Review_Rating>;
  /** fetch aggregated fields from the table: "aggregate.course_review_rating" */
  aggregate_course_review_rating_aggregate: Aggregate_Course_Review_Rating_Aggregate;
  /** fetch data from the table: "aggregate.course_useful_buckets" */
  aggregate_course_useful_buckets: Array<Aggregate_Course_Useful_Buckets>;
  /** fetch aggregated fields from the table: "aggregate.course_useful_buckets" */
  aggregate_course_useful_buckets_aggregate: Aggregate_Course_Useful_Buckets_Aggregate;
  /** fetch data from the table: "aggregate.prof_clear_buckets" */
  aggregate_prof_clear_buckets: Array<Aggregate_Prof_Clear_Buckets>;
  /** fetch aggregated fields from the table: "aggregate.prof_clear_buckets" */
  aggregate_prof_clear_buckets_aggregate: Aggregate_Prof_Clear_Buckets_Aggregate;
  /** fetch data from the table: "aggregate.prof_engaging_buckets" */
  aggregate_prof_engaging_buckets: Array<Aggregate_Prof_Engaging_Buckets>;
  /** fetch aggregated fields from the table: "aggregate.prof_engaging_buckets" */
  aggregate_prof_engaging_buckets_aggregate: Aggregate_Prof_Engaging_Buckets_Aggregate;
  /** fetch data from the table: "aggregate.prof_rating" */
  aggregate_prof_rating: Array<Aggregate_Prof_Rating>;
  /** fetch aggregated fields from the table: "aggregate.prof_rating" */
  aggregate_prof_rating_aggregate: Aggregate_Prof_Rating_Aggregate;
  /** fetch data from the table: "aggregate.prof_review_rating" */
  aggregate_prof_review_rating: Array<Aggregate_Prof_Review_Rating>;
  /** fetch aggregated fields from the table: "aggregate.prof_review_rating" */
  aggregate_prof_review_rating_aggregate: Aggregate_Prof_Review_Rating_Aggregate;
  /** fetch data from the table: "course" */
  course: Array<Course>;
  /** fetch data from the table: "course_antirequisite" */
  course_antirequisite: Array<Course_Antirequisite>;
  /** fetch data from the table: "course" using primary key columns */
  course_by_pk?: Maybe<Course>;
  /** fetch data from the table: "course_postrequisite" */
  course_postrequisite: Array<Course_Postrequisite>;
  /** fetch data from the table: "course_prerequisite" */
  course_prerequisite: Array<Course_Prerequisite>;
  /** fetch data from the table: "course_search_index" */
  course_search_index: Array<Course_Search_Index>;
  /** fetch aggregated fields from the table: "course_search_index" */
  course_search_index_aggregate: Course_Search_Index_Aggregate;
  /** fetch data from the table: "course_section" */
  course_section: Array<Course_Section>;
  /** fetch data from the table: "course_section" using primary key columns */
  course_section_by_pk?: Maybe<Course_Section>;
  /** fetch data from the table: "prof" */
  prof: Array<Prof>;
  /** fetch data from the table: "prof" using primary key columns */
  prof_by_pk?: Maybe<Prof>;
  /** fetch data from the table: "prof_search_index" */
  prof_search_index: Array<Prof_Search_Index>;
  /** fetch aggregated fields from the table: "prof_search_index" */
  prof_search_index_aggregate: Prof_Search_Index_Aggregate;
  /** fetch data from the table: "prof_teaches_course" */
  prof_teaches_course: Array<Prof_Teaches_Course>;
  /** fetch data from the table: "review" */
  review: Array<Review>;
  /** fetch data from the table: "review_author" */
  review_author: Array<Review_Author>;
  /** fetch data from the table: "review" using primary key columns */
  review_by_pk?: Maybe<Review>;
  /** execute function "search_courses" which returns "course_search_index" */
  search_courses: Array<Course_Search_Index>;
  /** execute function "search_courses" and query aggregates on result of table type "course_search_index" */
  search_courses_aggregate: Course_Search_Index_Aggregate;
  /** execute function "search_profs" which returns "prof_search_index" */
  search_profs: Array<Prof_Search_Index>;
  /** execute function "search_profs" and query aggregates on result of table type "prof_search_index" */
  search_profs_aggregate: Prof_Search_Index_Aggregate;
  /** fetch data from the table: "section_exam" */
  section_exam: Array<Section_Exam>;
  /** fetch data from the table: "section_meeting" */
  section_meeting: Array<Section_Meeting>;
};


/** query root */
export type Query_RootAggregate_Course_Easy_BucketsArgs = {
  distinct_on?: InputMaybe<Array<Aggregate_Course_Easy_Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Aggregate_Course_Easy_Buckets_Order_By>>;
  where?: InputMaybe<Aggregate_Course_Easy_Buckets_Bool_Exp>;
};


/** query root */
export type Query_RootAggregate_Course_Easy_Buckets_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Aggregate_Course_Easy_Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Aggregate_Course_Easy_Buckets_Order_By>>;
  where?: InputMaybe<Aggregate_Course_Easy_Buckets_Bool_Exp>;
};


/** query root */
export type Query_RootAggregate_Course_RatingArgs = {
  distinct_on?: InputMaybe<Array<Aggregate_Course_Rating_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Aggregate_Course_Rating_Order_By>>;
  where?: InputMaybe<Aggregate_Course_Rating_Bool_Exp>;
};


/** query root */
export type Query_RootAggregate_Course_Rating_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Aggregate_Course_Rating_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Aggregate_Course_Rating_Order_By>>;
  where?: InputMaybe<Aggregate_Course_Rating_Bool_Exp>;
};


/** query root */
export type Query_RootAggregate_Course_Review_RatingArgs = {
  distinct_on?: InputMaybe<Array<Aggregate_Course_Review_Rating_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Aggregate_Course_Review_Rating_Order_By>>;
  where?: InputMaybe<Aggregate_Course_Review_Rating_Bool_Exp>;
};


/** query root */
export type Query_RootAggregate_Course_Review_Rating_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Aggregate_Course_Review_Rating_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Aggregate_Course_Review_Rating_Order_By>>;
  where?: InputMaybe<Aggregate_Course_Review_Rating_Bool_Exp>;
};


/** query root */
export type Query_RootAggregate_Course_Useful_BucketsArgs = {
  distinct_on?: InputMaybe<Array<Aggregate_Course_Useful_Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Aggregate_Course_Useful_Buckets_Order_By>>;
  where?: InputMaybe<Aggregate_Course_Useful_Buckets_Bool_Exp>;
};


/** query root */
export type Query_RootAggregate_Course_Useful_Buckets_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Aggregate_Course_Useful_Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Aggregate_Course_Useful_Buckets_Order_By>>;
  where?: InputMaybe<Aggregate_Course_Useful_Buckets_Bool_Exp>;
};


/** query root */
export type Query_RootAggregate_Prof_Clear_BucketsArgs = {
  distinct_on?: InputMaybe<Array<Aggregate_Prof_Clear_Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Aggregate_Prof_Clear_Buckets_Order_By>>;
  where?: InputMaybe<Aggregate_Prof_Clear_Buckets_Bool_Exp>;
};


/** query root */
export type Query_RootAggregate_Prof_Clear_Buckets_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Aggregate_Prof_Clear_Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Aggregate_Prof_Clear_Buckets_Order_By>>;
  where?: InputMaybe<Aggregate_Prof_Clear_Buckets_Bool_Exp>;
};


/** query root */
export type Query_RootAggregate_Prof_Engaging_BucketsArgs = {
  distinct_on?: InputMaybe<Array<Aggregate_Prof_Engaging_Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Aggregate_Prof_Engaging_Buckets_Order_By>>;
  where?: InputMaybe<Aggregate_Prof_Engaging_Buckets_Bool_Exp>;
};


/** query root */
export type Query_RootAggregate_Prof_Engaging_Buckets_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Aggregate_Prof_Engaging_Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Aggregate_Prof_Engaging_Buckets_Order_By>>;
  where?: InputMaybe<Aggregate_Prof_Engaging_Buckets_Bool_Exp>;
};


/** query root */
export type Query_RootAggregate_Prof_RatingArgs = {
  distinct_on?: InputMaybe<Array<Aggregate_Prof_Rating_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Aggregate_Prof_Rating_Order_By>>;
  where?: InputMaybe<Aggregate_Prof_Rating_Bool_Exp>;
};


/** query root */
export type Query_RootAggregate_Prof_Rating_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Aggregate_Prof_Rating_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Aggregate_Prof_Rating_Order_By>>;
  where?: InputMaybe<Aggregate_Prof_Rating_Bool_Exp>;
};


/** query root */
export type Query_RootAggregate_Prof_Review_RatingArgs = {
  distinct_on?: InputMaybe<Array<Aggregate_Prof_Review_Rating_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Aggregate_Prof_Review_Rating_Order_By>>;
  where?: InputMaybe<Aggregate_Prof_Review_Rating_Bool_Exp>;
};


/** query root */
export type Query_RootAggregate_Prof_Review_Rating_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Aggregate_Prof_Review_Rating_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Aggregate_Prof_Review_Rating_Order_By>>;
  where?: InputMaybe<Aggregate_Prof_Review_Rating_Bool_Exp>;
};


/** query root */
export type Query_RootCourseArgs = {
  distinct_on?: InputMaybe<Array<Course_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Course_Order_By>>;
  where?: InputMaybe<Course_Bool_Exp>;
};


/** query root */
export type Query_RootCourse_AntirequisiteArgs = {
  distinct_on?: InputMaybe<Array<Course_Antirequisite_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Course_Antirequisite_Order_By>>;
  where?: InputMaybe<Course_Antirequisite_Bool_Exp>;
};


/** query root */
export type Query_RootCourse_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootCourse_PostrequisiteArgs = {
  distinct_on?: InputMaybe<Array<Course_Postrequisite_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Course_Postrequisite_Order_By>>;
  where?: InputMaybe<Course_Postrequisite_Bool_Exp>;
};


/** query root */
export type Query_RootCourse_PrerequisiteArgs = {
  distinct_on?: InputMaybe<Array<Course_Prerequisite_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Course_Prerequisite_Order_By>>;
  where?: InputMaybe<Course_Prerequisite_Bool_Exp>;
};


/** query root */
export type Query_RootCourse_Search_IndexArgs = {
  distinct_on?: InputMaybe<Array<Course_Search_Index_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Course_Search_Index_Order_By>>;
  where?: InputMaybe<Course_Search_Index_Bool_Exp>;
};


/** query root */
export type Query_RootCourse_Search_Index_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Course_Search_Index_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Course_Search_Index_Order_By>>;
  where?: InputMaybe<Course_Search_Index_Bool_Exp>;
};


/** query root */
export type Query_RootCourse_SectionArgs = {
  distinct_on?: InputMaybe<Array<Course_Section_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Course_Section_Order_By>>;
  where?: InputMaybe<Course_Section_Bool_Exp>;
};


/** query root */
export type Query_RootCourse_Section_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootProfArgs = {
  distinct_on?: InputMaybe<Array<Prof_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Prof_Order_By>>;
  where?: InputMaybe<Prof_Bool_Exp>;
};


/** query root */
export type Query_RootProf_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootProf_Search_IndexArgs = {
  distinct_on?: InputMaybe<Array<Prof_Search_Index_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Prof_Search_Index_Order_By>>;
  where?: InputMaybe<Prof_Search_Index_Bool_Exp>;
};


/** query root */
export type Query_RootProf_Search_Index_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Prof_Search_Index_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Prof_Search_Index_Order_By>>;
  where?: InputMaybe<Prof_Search_Index_Bool_Exp>;
};


/** query root */
export type Query_RootProf_Teaches_CourseArgs = {
  distinct_on?: InputMaybe<Array<Prof_Teaches_Course_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Prof_Teaches_Course_Order_By>>;
  where?: InputMaybe<Prof_Teaches_Course_Bool_Exp>;
};


/** query root */
export type Query_RootReviewArgs = {
  distinct_on?: InputMaybe<Array<Review_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Review_Order_By>>;
  where?: InputMaybe<Review_Bool_Exp>;
};


/** query root */
export type Query_RootReview_AuthorArgs = {
  distinct_on?: InputMaybe<Array<Review_Author_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Review_Author_Order_By>>;
  where?: InputMaybe<Review_Author_Bool_Exp>;
};


/** query root */
export type Query_RootReview_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootSearch_CoursesArgs = {
  args: Search_Courses_Args;
  distinct_on?: InputMaybe<Array<Course_Search_Index_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Course_Search_Index_Order_By>>;
  where?: InputMaybe<Course_Search_Index_Bool_Exp>;
};


/** query root */
export type Query_RootSearch_Courses_AggregateArgs = {
  args: Search_Courses_Args;
  distinct_on?: InputMaybe<Array<Course_Search_Index_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Course_Search_Index_Order_By>>;
  where?: InputMaybe<Course_Search_Index_Bool_Exp>;
};


/** query root */
export type Query_RootSearch_ProfsArgs = {
  args: Search_Profs_Args;
  distinct_on?: InputMaybe<Array<Prof_Search_Index_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Prof_Search_Index_Order_By>>;
  where?: InputMaybe<Prof_Search_Index_Bool_Exp>;
};


/** query root */
export type Query_RootSearch_Profs_AggregateArgs = {
  args: Search_Profs_Args;
  distinct_on?: InputMaybe<Array<Prof_Search_Index_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Prof_Search_Index_Order_By>>;
  where?: InputMaybe<Prof_Search_Index_Bool_Exp>;
};


/** query root */
export type Query_RootSection_ExamArgs = {
  distinct_on?: InputMaybe<Array<Section_Exam_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Section_Exam_Order_By>>;
  where?: InputMaybe<Section_Exam_Bool_Exp>;
};


/** query root */
export type Query_RootSection_MeetingArgs = {
  distinct_on?: InputMaybe<Array<Section_Meeting_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Section_Meeting_Order_By>>;
  where?: InputMaybe<Section_Meeting_Bool_Exp>;
};

/** columns and relationships of "review" */
export type Review = {
  __typename?: 'review';
  /** An object relationship */
  author?: Maybe<Review_Author>;
  /** An object relationship */
  course?: Maybe<Course>;
  course_comment?: Maybe<Scalars['String']>;
  course_easy?: Maybe<Scalars['smallint']>;
  course_id?: Maybe<Scalars['Int']>;
  /** An object relationship */
  course_review_rating?: Maybe<Aggregate_Course_Review_Rating>;
  course_useful?: Maybe<Scalars['smallint']>;
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  liked?: Maybe<Scalars['smallint']>;
  /** An object relationship */
  prof?: Maybe<Prof>;
  prof_clear?: Maybe<Scalars['smallint']>;
  prof_comment?: Maybe<Scalars['String']>;
  prof_engaging?: Maybe<Scalars['smallint']>;
  prof_id?: Maybe<Scalars['Int']>;
  /** An object relationship */
  prof_review_rating?: Maybe<Aggregate_Prof_Review_Rating>;
  public: Scalars['Boolean'];
  updated_at: Scalars['timestamptz'];
};

/** columns and relationships of "review_author" */
export type Review_Author = {
  __typename?: 'review_author';
  full_name?: Maybe<Scalars['String']>;
  picture_url?: Maybe<Scalars['String']>;
  program?: Maybe<Scalars['String']>;
  review_id?: Maybe<Scalars['Int']>;
};

/** Boolean expression to filter rows from the table "review_author". All fields are combined with a logical 'AND'. */
export type Review_Author_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Review_Author_Bool_Exp>>>;
  _not?: InputMaybe<Review_Author_Bool_Exp>;
  _or?: InputMaybe<Array<InputMaybe<Review_Author_Bool_Exp>>>;
  full_name?: InputMaybe<String_Comparison_Exp>;
  picture_url?: InputMaybe<String_Comparison_Exp>;
  program?: InputMaybe<String_Comparison_Exp>;
  review_id?: InputMaybe<Int_Comparison_Exp>;
};

/** ordering options when selecting data from "review_author" */
export type Review_Author_Order_By = {
  full_name?: InputMaybe<Order_By>;
  picture_url?: InputMaybe<Order_By>;
  program?: InputMaybe<Order_By>;
  review_id?: InputMaybe<Order_By>;
};

/** select columns of table "review_author" */
export enum Review_Author_Select_Column {
  /** column name */
  FullName = 'full_name',
  /** column name */
  PictureUrl = 'picture_url',
  /** column name */
  Program = 'program',
  /** column name */
  ReviewId = 'review_id'
}

/** Boolean expression to filter rows from the table "review". All fields are combined with a logical 'AND'. */
export type Review_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Review_Bool_Exp>>>;
  _not?: InputMaybe<Review_Bool_Exp>;
  _or?: InputMaybe<Array<InputMaybe<Review_Bool_Exp>>>;
  author?: InputMaybe<Review_Author_Bool_Exp>;
  course?: InputMaybe<Course_Bool_Exp>;
  course_comment?: InputMaybe<String_Comparison_Exp>;
  course_easy?: InputMaybe<Smallint_Comparison_Exp>;
  course_id?: InputMaybe<Int_Comparison_Exp>;
  course_review_rating?: InputMaybe<Aggregate_Course_Review_Rating_Bool_Exp>;
  course_useful?: InputMaybe<Smallint_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  liked?: InputMaybe<Smallint_Comparison_Exp>;
  prof?: InputMaybe<Prof_Bool_Exp>;
  prof_clear?: InputMaybe<Smallint_Comparison_Exp>;
  prof_comment?: InputMaybe<String_Comparison_Exp>;
  prof_engaging?: InputMaybe<Smallint_Comparison_Exp>;
  prof_id?: InputMaybe<Int_Comparison_Exp>;
  prof_review_rating?: InputMaybe<Aggregate_Prof_Review_Rating_Bool_Exp>;
  public?: InputMaybe<Boolean_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** ordering options when selecting data from "review" */
export type Review_Order_By = {
  author?: InputMaybe<Review_Author_Order_By>;
  course?: InputMaybe<Course_Order_By>;
  course_comment?: InputMaybe<Order_By>;
  course_easy?: InputMaybe<Order_By>;
  course_id?: InputMaybe<Order_By>;
  course_review_rating?: InputMaybe<Aggregate_Course_Review_Rating_Order_By>;
  course_useful?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  liked?: InputMaybe<Order_By>;
  prof?: InputMaybe<Prof_Order_By>;
  prof_clear?: InputMaybe<Order_By>;
  prof_comment?: InputMaybe<Order_By>;
  prof_engaging?: InputMaybe<Order_By>;
  prof_id?: InputMaybe<Order_By>;
  prof_review_rating?: InputMaybe<Aggregate_Prof_Review_Rating_Order_By>;
  public?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: "review" */
export type Review_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "review" */
export enum Review_Select_Column {
  /** column name */
  CourseComment = 'course_comment',
  /** column name */
  CourseEasy = 'course_easy',
  /** column name */
  CourseId = 'course_id',
  /** column name */
  CourseUseful = 'course_useful',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Liked = 'liked',
  /** column name */
  ProfClear = 'prof_clear',
  /** column name */
  ProfComment = 'prof_comment',
  /** column name */
  ProfEngaging = 'prof_engaging',
  /** column name */
  ProfId = 'prof_id',
  /** column name */
  Public = 'public',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Search_Courses_Args = {
  code_only?: InputMaybe<Scalars['Boolean']>;
  query?: InputMaybe<Scalars['String']>;
};

export type Search_Profs_Args = {
  code_only?: InputMaybe<Scalars['Boolean']>;
  query?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "section_exam" */
export type Section_Exam = {
  __typename?: 'section_exam';
  date?: Maybe<Scalars['date']>;
  day?: Maybe<Scalars['String']>;
  end_seconds?: Maybe<Scalars['Int']>;
  is_tba: Scalars['Boolean'];
  location?: Maybe<Scalars['String']>;
  section_id: Scalars['Int'];
  start_seconds?: Maybe<Scalars['Int']>;
};

/** Boolean expression to filter rows from the table "section_exam". All fields are combined with a logical 'AND'. */
export type Section_Exam_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Section_Exam_Bool_Exp>>>;
  _not?: InputMaybe<Section_Exam_Bool_Exp>;
  _or?: InputMaybe<Array<InputMaybe<Section_Exam_Bool_Exp>>>;
  date?: InputMaybe<Date_Comparison_Exp>;
  day?: InputMaybe<String_Comparison_Exp>;
  end_seconds?: InputMaybe<Int_Comparison_Exp>;
  is_tba?: InputMaybe<Boolean_Comparison_Exp>;
  location?: InputMaybe<String_Comparison_Exp>;
  section_id?: InputMaybe<Int_Comparison_Exp>;
  start_seconds?: InputMaybe<Int_Comparison_Exp>;
};

/** ordering options when selecting data from "section_exam" */
export type Section_Exam_Order_By = {
  date?: InputMaybe<Order_By>;
  day?: InputMaybe<Order_By>;
  end_seconds?: InputMaybe<Order_By>;
  is_tba?: InputMaybe<Order_By>;
  location?: InputMaybe<Order_By>;
  section_id?: InputMaybe<Order_By>;
  start_seconds?: InputMaybe<Order_By>;
};

/** select columns of table "section_exam" */
export enum Section_Exam_Select_Column {
  /** column name */
  Date = 'date',
  /** column name */
  Day = 'day',
  /** column name */
  EndSeconds = 'end_seconds',
  /** column name */
  IsTba = 'is_tba',
  /** column name */
  Location = 'location',
  /** column name */
  SectionId = 'section_id',
  /** column name */
  StartSeconds = 'start_seconds'
}

/** columns and relationships of "section_meeting" */
export type Section_Meeting = {
  __typename?: 'section_meeting';
  days: Scalars['_text'];
  end_date: Scalars['date'];
  end_seconds?: Maybe<Scalars['Int']>;
  is_cancelled: Scalars['Boolean'];
  is_closed: Scalars['Boolean'];
  is_tba: Scalars['Boolean'];
  location?: Maybe<Scalars['String']>;
  /** An object relationship */
  prof?: Maybe<Prof>;
  prof_id?: Maybe<Scalars['Int']>;
  section_id: Scalars['Int'];
  start_date: Scalars['date'];
  start_seconds?: Maybe<Scalars['Int']>;
};

/** Boolean expression to filter rows from the table "section_meeting". All fields are combined with a logical 'AND'. */
export type Section_Meeting_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Section_Meeting_Bool_Exp>>>;
  _not?: InputMaybe<Section_Meeting_Bool_Exp>;
  _or?: InputMaybe<Array<InputMaybe<Section_Meeting_Bool_Exp>>>;
  days?: InputMaybe<_Text_Comparison_Exp>;
  end_date?: InputMaybe<Date_Comparison_Exp>;
  end_seconds?: InputMaybe<Int_Comparison_Exp>;
  is_cancelled?: InputMaybe<Boolean_Comparison_Exp>;
  is_closed?: InputMaybe<Boolean_Comparison_Exp>;
  is_tba?: InputMaybe<Boolean_Comparison_Exp>;
  location?: InputMaybe<String_Comparison_Exp>;
  prof?: InputMaybe<Prof_Bool_Exp>;
  prof_id?: InputMaybe<Int_Comparison_Exp>;
  section_id?: InputMaybe<Int_Comparison_Exp>;
  start_date?: InputMaybe<Date_Comparison_Exp>;
  start_seconds?: InputMaybe<Int_Comparison_Exp>;
};

/** ordering options when selecting data from "section_meeting" */
export type Section_Meeting_Order_By = {
  days?: InputMaybe<Order_By>;
  end_date?: InputMaybe<Order_By>;
  end_seconds?: InputMaybe<Order_By>;
  is_cancelled?: InputMaybe<Order_By>;
  is_closed?: InputMaybe<Order_By>;
  is_tba?: InputMaybe<Order_By>;
  location?: InputMaybe<Order_By>;
  prof?: InputMaybe<Prof_Order_By>;
  prof_id?: InputMaybe<Order_By>;
  section_id?: InputMaybe<Order_By>;
  start_date?: InputMaybe<Order_By>;
  start_seconds?: InputMaybe<Order_By>;
};

/** select columns of table "section_meeting" */
export enum Section_Meeting_Select_Column {
  /** column name */
  Days = 'days',
  /** column name */
  EndDate = 'end_date',
  /** column name */
  EndSeconds = 'end_seconds',
  /** column name */
  IsCancelled = 'is_cancelled',
  /** column name */
  IsClosed = 'is_closed',
  /** column name */
  IsTba = 'is_tba',
  /** column name */
  Location = 'location',
  /** column name */
  ProfId = 'prof_id',
  /** column name */
  SectionId = 'section_id',
  /** column name */
  StartDate = 'start_date',
  /** column name */
  StartSeconds = 'start_seconds'
}

/** expression to compare columns of type smallint. All fields are combined with logical 'AND'. */
export type Smallint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['smallint']>;
  _gt?: InputMaybe<Scalars['smallint']>;
  _gte?: InputMaybe<Scalars['smallint']>;
  _in?: InputMaybe<Array<Scalars['smallint']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['smallint']>;
  _lte?: InputMaybe<Scalars['smallint']>;
  _neq?: InputMaybe<Scalars['smallint']>;
  _nin?: InputMaybe<Array<Scalars['smallint']>>;
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "aggregate.course_easy_buckets" */
  aggregate_course_easy_buckets: Array<Aggregate_Course_Easy_Buckets>;
  /** fetch aggregated fields from the table: "aggregate.course_easy_buckets" */
  aggregate_course_easy_buckets_aggregate: Aggregate_Course_Easy_Buckets_Aggregate;
  /** fetch data from the table: "aggregate.course_rating" */
  aggregate_course_rating: Array<Aggregate_Course_Rating>;
  /** fetch aggregated fields from the table: "aggregate.course_rating" */
  aggregate_course_rating_aggregate: Aggregate_Course_Rating_Aggregate;
  /** fetch data from the table: "aggregate.course_review_rating" */
  aggregate_course_review_rating: Array<Aggregate_Course_Review_Rating>;
  /** fetch aggregated fields from the table: "aggregate.course_review_rating" */
  aggregate_course_review_rating_aggregate: Aggregate_Course_Review_Rating_Aggregate;
  /** fetch data from the table: "aggregate.course_useful_buckets" */
  aggregate_course_useful_buckets: Array<Aggregate_Course_Useful_Buckets>;
  /** fetch aggregated fields from the table: "aggregate.course_useful_buckets" */
  aggregate_course_useful_buckets_aggregate: Aggregate_Course_Useful_Buckets_Aggregate;
  /** fetch data from the table: "aggregate.prof_clear_buckets" */
  aggregate_prof_clear_buckets: Array<Aggregate_Prof_Clear_Buckets>;
  /** fetch aggregated fields from the table: "aggregate.prof_clear_buckets" */
  aggregate_prof_clear_buckets_aggregate: Aggregate_Prof_Clear_Buckets_Aggregate;
  /** fetch data from the table: "aggregate.prof_engaging_buckets" */
  aggregate_prof_engaging_buckets: Array<Aggregate_Prof_Engaging_Buckets>;
  /** fetch aggregated fields from the table: "aggregate.prof_engaging_buckets" */
  aggregate_prof_engaging_buckets_aggregate: Aggregate_Prof_Engaging_Buckets_Aggregate;
  /** fetch data from the table: "aggregate.prof_rating" */
  aggregate_prof_rating: Array<Aggregate_Prof_Rating>;
  /** fetch aggregated fields from the table: "aggregate.prof_rating" */
  aggregate_prof_rating_aggregate: Aggregate_Prof_Rating_Aggregate;
  /** fetch data from the table: "aggregate.prof_review_rating" */
  aggregate_prof_review_rating: Array<Aggregate_Prof_Review_Rating>;
  /** fetch aggregated fields from the table: "aggregate.prof_review_rating" */
  aggregate_prof_review_rating_aggregate: Aggregate_Prof_Review_Rating_Aggregate;
  /** fetch data from the table: "course" */
  course: Array<Course>;
  /** fetch data from the table: "course_antirequisite" */
  course_antirequisite: Array<Course_Antirequisite>;
  /** fetch data from the table: "course" using primary key columns */
  course_by_pk?: Maybe<Course>;
  /** fetch data from the table: "course_postrequisite" */
  course_postrequisite: Array<Course_Postrequisite>;
  /** fetch data from the table: "course_prerequisite" */
  course_prerequisite: Array<Course_Prerequisite>;
  /** fetch data from the table: "course_search_index" */
  course_search_index: Array<Course_Search_Index>;
  /** fetch aggregated fields from the table: "course_search_index" */
  course_search_index_aggregate: Course_Search_Index_Aggregate;
  /** fetch data from the table: "course_section" */
  course_section: Array<Course_Section>;
  /** fetch data from the table: "course_section" using primary key columns */
  course_section_by_pk?: Maybe<Course_Section>;
  /** fetch data from the table: "prof" */
  prof: Array<Prof>;
  /** fetch data from the table: "prof" using primary key columns */
  prof_by_pk?: Maybe<Prof>;
  /** fetch data from the table: "prof_search_index" */
  prof_search_index: Array<Prof_Search_Index>;
  /** fetch aggregated fields from the table: "prof_search_index" */
  prof_search_index_aggregate: Prof_Search_Index_Aggregate;
  /** fetch data from the table: "prof_teaches_course" */
  prof_teaches_course: Array<Prof_Teaches_Course>;
  /** fetch data from the table: "review" */
  review: Array<Review>;
  /** fetch data from the table: "review_author" */
  review_author: Array<Review_Author>;
  /** fetch data from the table: "review" using primary key columns */
  review_by_pk?: Maybe<Review>;
  /** execute function "search_courses" which returns "course_search_index" */
  search_courses: Array<Course_Search_Index>;
  /** execute function "search_courses" and query aggregates on result of table type "course_search_index" */
  search_courses_aggregate: Course_Search_Index_Aggregate;
  /** execute function "search_profs" which returns "prof_search_index" */
  search_profs: Array<Prof_Search_Index>;
  /** execute function "search_profs" and query aggregates on result of table type "prof_search_index" */
  search_profs_aggregate: Prof_Search_Index_Aggregate;
  /** fetch data from the table: "section_exam" */
  section_exam: Array<Section_Exam>;
  /** fetch data from the table: "section_meeting" */
  section_meeting: Array<Section_Meeting>;
};


/** subscription root */
export type Subscription_RootAggregate_Course_Easy_BucketsArgs = {
  distinct_on?: InputMaybe<Array<Aggregate_Course_Easy_Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Aggregate_Course_Easy_Buckets_Order_By>>;
  where?: InputMaybe<Aggregate_Course_Easy_Buckets_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAggregate_Course_Easy_Buckets_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Aggregate_Course_Easy_Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Aggregate_Course_Easy_Buckets_Order_By>>;
  where?: InputMaybe<Aggregate_Course_Easy_Buckets_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAggregate_Course_RatingArgs = {
  distinct_on?: InputMaybe<Array<Aggregate_Course_Rating_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Aggregate_Course_Rating_Order_By>>;
  where?: InputMaybe<Aggregate_Course_Rating_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAggregate_Course_Rating_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Aggregate_Course_Rating_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Aggregate_Course_Rating_Order_By>>;
  where?: InputMaybe<Aggregate_Course_Rating_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAggregate_Course_Review_RatingArgs = {
  distinct_on?: InputMaybe<Array<Aggregate_Course_Review_Rating_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Aggregate_Course_Review_Rating_Order_By>>;
  where?: InputMaybe<Aggregate_Course_Review_Rating_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAggregate_Course_Review_Rating_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Aggregate_Course_Review_Rating_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Aggregate_Course_Review_Rating_Order_By>>;
  where?: InputMaybe<Aggregate_Course_Review_Rating_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAggregate_Course_Useful_BucketsArgs = {
  distinct_on?: InputMaybe<Array<Aggregate_Course_Useful_Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Aggregate_Course_Useful_Buckets_Order_By>>;
  where?: InputMaybe<Aggregate_Course_Useful_Buckets_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAggregate_Course_Useful_Buckets_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Aggregate_Course_Useful_Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Aggregate_Course_Useful_Buckets_Order_By>>;
  where?: InputMaybe<Aggregate_Course_Useful_Buckets_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAggregate_Prof_Clear_BucketsArgs = {
  distinct_on?: InputMaybe<Array<Aggregate_Prof_Clear_Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Aggregate_Prof_Clear_Buckets_Order_By>>;
  where?: InputMaybe<Aggregate_Prof_Clear_Buckets_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAggregate_Prof_Clear_Buckets_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Aggregate_Prof_Clear_Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Aggregate_Prof_Clear_Buckets_Order_By>>;
  where?: InputMaybe<Aggregate_Prof_Clear_Buckets_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAggregate_Prof_Engaging_BucketsArgs = {
  distinct_on?: InputMaybe<Array<Aggregate_Prof_Engaging_Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Aggregate_Prof_Engaging_Buckets_Order_By>>;
  where?: InputMaybe<Aggregate_Prof_Engaging_Buckets_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAggregate_Prof_Engaging_Buckets_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Aggregate_Prof_Engaging_Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Aggregate_Prof_Engaging_Buckets_Order_By>>;
  where?: InputMaybe<Aggregate_Prof_Engaging_Buckets_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAggregate_Prof_RatingArgs = {
  distinct_on?: InputMaybe<Array<Aggregate_Prof_Rating_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Aggregate_Prof_Rating_Order_By>>;
  where?: InputMaybe<Aggregate_Prof_Rating_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAggregate_Prof_Rating_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Aggregate_Prof_Rating_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Aggregate_Prof_Rating_Order_By>>;
  where?: InputMaybe<Aggregate_Prof_Rating_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAggregate_Prof_Review_RatingArgs = {
  distinct_on?: InputMaybe<Array<Aggregate_Prof_Review_Rating_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Aggregate_Prof_Review_Rating_Order_By>>;
  where?: InputMaybe<Aggregate_Prof_Review_Rating_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAggregate_Prof_Review_Rating_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Aggregate_Prof_Review_Rating_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Aggregate_Prof_Review_Rating_Order_By>>;
  where?: InputMaybe<Aggregate_Prof_Review_Rating_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCourseArgs = {
  distinct_on?: InputMaybe<Array<Course_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Course_Order_By>>;
  where?: InputMaybe<Course_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCourse_AntirequisiteArgs = {
  distinct_on?: InputMaybe<Array<Course_Antirequisite_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Course_Antirequisite_Order_By>>;
  where?: InputMaybe<Course_Antirequisite_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCourse_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootCourse_PostrequisiteArgs = {
  distinct_on?: InputMaybe<Array<Course_Postrequisite_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Course_Postrequisite_Order_By>>;
  where?: InputMaybe<Course_Postrequisite_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCourse_PrerequisiteArgs = {
  distinct_on?: InputMaybe<Array<Course_Prerequisite_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Course_Prerequisite_Order_By>>;
  where?: InputMaybe<Course_Prerequisite_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCourse_Search_IndexArgs = {
  distinct_on?: InputMaybe<Array<Course_Search_Index_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Course_Search_Index_Order_By>>;
  where?: InputMaybe<Course_Search_Index_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCourse_Search_Index_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Course_Search_Index_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Course_Search_Index_Order_By>>;
  where?: InputMaybe<Course_Search_Index_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCourse_SectionArgs = {
  distinct_on?: InputMaybe<Array<Course_Section_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Course_Section_Order_By>>;
  where?: InputMaybe<Course_Section_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCourse_Section_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootProfArgs = {
  distinct_on?: InputMaybe<Array<Prof_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Prof_Order_By>>;
  where?: InputMaybe<Prof_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootProf_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootProf_Search_IndexArgs = {
  distinct_on?: InputMaybe<Array<Prof_Search_Index_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Prof_Search_Index_Order_By>>;
  where?: InputMaybe<Prof_Search_Index_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootProf_Search_Index_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Prof_Search_Index_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Prof_Search_Index_Order_By>>;
  where?: InputMaybe<Prof_Search_Index_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootProf_Teaches_CourseArgs = {
  distinct_on?: InputMaybe<Array<Prof_Teaches_Course_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Prof_Teaches_Course_Order_By>>;
  where?: InputMaybe<Prof_Teaches_Course_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootReviewArgs = {
  distinct_on?: InputMaybe<Array<Review_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Review_Order_By>>;
  where?: InputMaybe<Review_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootReview_AuthorArgs = {
  distinct_on?: InputMaybe<Array<Review_Author_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Review_Author_Order_By>>;
  where?: InputMaybe<Review_Author_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootReview_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootSearch_CoursesArgs = {
  args: Search_Courses_Args;
  distinct_on?: InputMaybe<Array<Course_Search_Index_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Course_Search_Index_Order_By>>;
  where?: InputMaybe<Course_Search_Index_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootSearch_Courses_AggregateArgs = {
  args: Search_Courses_Args;
  distinct_on?: InputMaybe<Array<Course_Search_Index_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Course_Search_Index_Order_By>>;
  where?: InputMaybe<Course_Search_Index_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootSearch_ProfsArgs = {
  args: Search_Profs_Args;
  distinct_on?: InputMaybe<Array<Prof_Search_Index_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Prof_Search_Index_Order_By>>;
  where?: InputMaybe<Prof_Search_Index_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootSearch_Profs_AggregateArgs = {
  args: Search_Profs_Args;
  distinct_on?: InputMaybe<Array<Prof_Search_Index_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Prof_Search_Index_Order_By>>;
  where?: InputMaybe<Prof_Search_Index_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootSection_ExamArgs = {
  distinct_on?: InputMaybe<Array<Section_Exam_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Section_Exam_Order_By>>;
  where?: InputMaybe<Section_Exam_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootSection_MeetingArgs = {
  distinct_on?: InputMaybe<Array<Section_Meeting_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Section_Meeting_Order_By>>;
  where?: InputMaybe<Section_Meeting_Bool_Exp>;
};

/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

export type GetRoomsQueryVariables = Exact<{
  room: Scalars['String'];
}>;


export type GetRoomsQuery = { __typename?: 'query_root', section_meeting: Array<{ __typename?: 'section_meeting', days: any, section_id: number, start_date: any, end_date: any, start_seconds?: number | null, end_seconds?: number | null }> };

export type GetCourseQueryVariables = Exact<{
  section: Scalars['Int'];
}>;


export type GetCourseQuery = { __typename?: 'query_root', course_section_by_pk?: { __typename?: 'course_section', section_name: string, course: { __typename?: 'course', name: string, code: string } } | null };


export const GetRoomsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetRooms"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"room"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"section_meeting"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"location"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"room"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"start_seconds"},"value":{"kind":"EnumValue","value":"asc"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"days"}},{"kind":"Field","name":{"kind":"Name","value":"section_id"}},{"kind":"Field","name":{"kind":"Name","value":"start_date"}},{"kind":"Field","name":{"kind":"Name","value":"end_date"}},{"kind":"Field","name":{"kind":"Name","value":"start_seconds"}},{"kind":"Field","name":{"kind":"Name","value":"end_seconds"}}]}}]}}]} as unknown as DocumentNode<GetRoomsQuery, GetRoomsQueryVariables>;
export const GetCourseDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCourse"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"section"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"course_section_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"section"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"section_name"}},{"kind":"Field","name":{"kind":"Name","value":"course"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}}]}}]} as unknown as DocumentNode<GetCourseQuery, GetCourseQueryVariables>;
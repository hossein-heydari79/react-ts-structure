import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API } from '../../../../utils/statics/routes/api'

import type { GetUsers_Payload, GetUsers_Response } from './interface'

export const homeApi = createApi({
  reducerPath: 'homeApi',
  baseQuery: fetchBaseQuery({ baseUrl: API.ROOT }),
  endpoints: (builder) => ({
    getUsers: builder.query<GetUsers_Response, GetUsers_Payload>({
      query: () => API.GET_USERS,
    }),
  }),
})

export const { useGetUsersQuery } = homeApi

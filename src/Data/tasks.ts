
export type Task = {
  id: number;
  title: string;
  description: string | null;
  status: number;
  tags: number[];
  [key: string]: any;
}

export const tasksData: Task[] = [
  {
    "id": 75,
    "title": "WORK MTF ",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    "status": 1,
    "status_display": "To do",
    "status_change_date": "2021-10-08T16:08:24.161862+02:00",
    "custom_due_date": null,
    "due_date": null,
    "start_date": null,
    "duration": 1,
    "duration_unit": "days",
    "members": [
      36
    ],
    "groups": [],
    "archived": false,
    "public": true,
    "tags": [1, 5, 55],
    "project": 24,
    "milestone": null,
    "content_type": null,
    "object_id": null,
    "parent": null,
    "orders": [],
    "deliverables": [],
    "dependencies": [],
    "timeline_data": {
      "orders": [],
      "objects": [],
      "duration": 0.1,
      "end_time": 0.1,
      "delay_time": 0,
      "start_time": 0,
      "deliverables": [],
      "dependencies": [],
      "missing_time": 0,
      "timeline_unit": "weeks",
      "future_objects": [],
      "pre_req_objects": []
    },
    "contenttype": 177,
    "created_by": 1,
    "updated_by": 1,
    "created": "2021-10-08T16:07:46.718449+02:00",
    "updated": "2021-10-08T16:08:24.161845+02:00"
  },
  {
    "id": 99,
    "title": "a",
    "description": "<p>aa</p>",
    "status": 1,
    "status_display": "To do",
    "status_change_date": "2021-11-15T18:39:26.696247+01:00",
    "custom_due_date": null,
    "due_date": null,
    "start_date": null,
    "duration": 1,
    "duration_unit": "days",
    "members": [],
    "groups": [],
    "archived": false,
    "public": true,
    "tags": [],
    "project": 24,
    "milestone": null,
    "content_type": null,
    "object_id": null,
    "parent": null,
    "orders": [],
    "deliverables": [],
    "dependencies": [],
    "timeline_data": {
      "orders": [],
      "objects": [],
      "duration": 0.1,
      "end_time": 0.1,
      "delay_time": 0,
      "start_time": 0,
      "deliverables": [],
      "dependencies": [],
      "missing_time": 0,
      "timeline_unit": "weeks",
      "future_objects": [],
      "pre_req_objects": []
    },
    "contenttype": 177,
    "created_by": 117,
    "updated_by": 117,
    "created": "2021-11-15T18:39:19.993150+01:00",
    "updated": "2021-11-15T18:39:26.696233+01:00"
  },
  {
    "id": 23,
    "title": "Systems Engineering Plan",
    "description": null,
    "status": 42,
    "status_display": "Completed",
    "status_change_date": "2020-06-01T10:40:59.889749+02:00",
    "custom_due_date": null,
    "due_date": "2020-08-01",
    "start_date": null,
    "duration": 40,
    "duration_unit": "days",
    "members": [],
    "groups": [],
    "archived": false,
    "public": true,
    "tags": [],
    "project": 24,
    "milestone": 5,
    "content_type": null,
    "object_id": null,
    "parent": null,
    "orders": [
      8
    ],
    "deliverables": [
      4
    ],
    "dependencies": [
      17
    ],
    "timeline_data": {
      "orders": [
        "171-5"
      ],
      "objects": [],
      "duration": 5.7,
      "end_time": 7.7,
      "delay_time": 0,
      "start_time": 2,
      "deliverables": [
        "171-7"
      ],
      "dependencies": [
        17
      ],
      "missing_time": 0,
      "timeline_unit": "weeks",
      "future_objects": [
        "171-7"
      ],
      "pre_req_objects": [
        "171-5"
      ]
    },
    "contenttype": 177,
    "created_by": 1,
    "updated_by": null,
    "created": "2020-05-21T16:59:14.190480+02:00",
    "updated": "2020-06-01T10:40:59.889732+02:00"
  },
  {
    "id": 5027,
    "title": "New task",
    "description": null,
    "status": 1,
    "status_display": "To do",
    "status_change_date": "2022-07-09T13:03:12.599177+02:00",
    "custom_due_date": null,
    "due_date": null,
    "start_date": null,
    "duration": 1,
    "duration_unit": "days",
    "members": [],
    "groups": [],
    "archived": false,
    "public": true,
    "tags": [],
    "project": 24,
    "milestone": null,
    "content_type": null,
    "object_id": null,
    "parent": null,
    "orders": [],
    "deliverables": [],
    "dependencies": [],
    "timeline_data": {
      "orders": [],
      "objects": [],
      "duration": 0.1,
      "end_time": 0.1,
      "delay_time": 0,
      "start_time": 0,
      "deliverables": [],
      "dependencies": [],
      "missing_time": 0,
      "timeline_unit": "weeks",
      "future_objects": [],
      "pre_req_objects": []
    },
    "contenttype": 177,
    "created_by": 98,
    "updated_by": null,
    "created": "2022-07-09T13:03:12.599128+02:00",
    "updated": "2022-07-09T13:03:12.599151+02:00"
  },
  {
    "id": 84,
    "title": "New task",
    "description": null,
    "status": 1,
    "status_display": "To do",
    "status_change_date": "2021-10-26T12:36:29.630647+02:00",
    "custom_due_date": null,
    "due_date": null,
    "start_date": null,
    "duration": 1,
    "duration_unit": "days",
    "members": [],
    "groups": [],
    "archived": false,
    "public": true,
    "tags": [],
    "project": 24,
    "milestone": null,
    "content_type": null,
    "object_id": null,
    "parent": null,
    "orders": [],
    "deliverables": [
      14
    ],
    "dependencies": [],
    "timeline_data": {
      "orders": [],
      "objects": [],
      "duration": 0.1,
      "end_time": 0.1,
      "delay_time": 0,
      "start_time": 0,
      "deliverables": [
        "21-2983"
      ],
      "dependencies": [],
      "missing_time": 0,
      "timeline_unit": "weeks",
      "future_objects": [
        "21-2983"
      ],
      "pre_req_objects": []
    },
    "contenttype": 177,
    "created_by": 1,
    "updated_by": null,
    "created": "2021-10-26T12:36:29.630599+02:00",
    "updated": "2021-10-26T12:36:29.630622+02:00"
  },
  {
    "id": 143,
    "title": "New task",
    "description": null,
    "status": 1,
    "status_display": "To do",
    "status_change_date": "2022-01-17T10:45:12.897070+01:00",
    "custom_due_date": null,
    "due_date": null,
    "start_date": null,
    "duration": 1,
    "duration_unit": "days",
    "members": [],
    "groups": [],
    "archived": false,
    "public": true,
    "tags": [],
    "project": 24,
    "milestone": null,
    "content_type": null,
    "object_id": null,
    "parent": null,
    "orders": [],
    "deliverables": [],
    "dependencies": [],
    "timeline_data": {
      "orders": [],
      "objects": [],
      "duration": 0.1,
      "end_time": 0.1,
      "delay_time": 0,
      "start_time": 0,
      "deliverables": [],
      "dependencies": [],
      "missing_time": 0,
      "timeline_unit": "weeks",
      "future_objects": [],
      "pre_req_objects": []
    },
    "contenttype": 177,
    "created_by": 117,
    "updated_by": null,
    "created": "2022-01-17T10:45:12.897019+01:00",
    "updated": "2022-01-17T10:45:12.897042+01:00"
  },
  {
    "id": 31,
    "title": "Technical Budget",
    "description": null,
    "status": 1,
    "status_display": "To do",
    "status_change_date": "2020-06-01T10:46:23.659097+02:00",
    "custom_due_date": null,
    "due_date": null,
    "start_date": null,
    "duration": 15,
    "duration_unit": "days",
    "members": [],
    "groups": [],
    "archived": false,
    "public": true,
    "tags": [],
    "project": 24,
    "milestone": null,
    "content_type": null,
    "object_id": null,
    "parent": null,
    "orders": [
      10
    ],
    "deliverables": [
      6
    ],
    "dependencies": [
      29
    ],
    "timeline_data": {
      "orders": [
        "171-10"
      ],
      "objects": [
        "171-10"
      ],
      "duration": 2.1,
      "end_time": 5.7,
      "delay_time": 0,
      "start_time": 3.6,
      "deliverables": [
        "171-9"
      ],
      "dependencies": [
        29
      ],
      "missing_time": 0,
      "timeline_unit": "weeks",
      "future_objects": [
        "171-9"
      ],
      "pre_req_objects": [
        "171-10"
      ]
    },
    "contenttype": 177,
    "created_by": 1,
    "updated_by": null,
    "created": "2020-05-21T17:45:05.717388+02:00",
    "updated": "2020-06-01T10:46:23.659079+02:00"
  },
  {
    "id": 10,
    "title": "Concept CAD Model",
    "description": "Create detailed CAD model",
    "status": 1,
    "status_display": "To do",
    "status_change_date": "2020-09-15T13:16:29.324680+02:00",
    "custom_due_date": null,
    "due_date": "2020-08-12",
    "start_date": null,
    "duration": 17,
    "duration_unit": "days",
    "members": [],
    "groups": [],
    "archived": false,
    "public": true,
    "tags": [],
    "project": 24,
    "milestone": 2,
    "content_type": null,
    "object_id": null,
    "parent": null,
    "orders": [],
    "deliverables": [
      1
    ],
    "dependencies": [
      9
    ],
    "timeline_data": {
      "orders": [],
      "objects": [],
      "duration": 2.4,
      "end_time": 10.3,
      "delay_time": 0,
      "start_time": 7.9,
      "deliverables": [
        "171-4"
      ],
      "dependencies": [
        9
      ],
      "missing_time": 0.1,
      "timeline_unit": "weeks",
      "future_objects": [
        "171-112",
        "36-3040",
        "171-4"
      ],
      "pre_req_objects": [
        "171-5",
        "171-2",
        "171-6"
      ]
    },
    "contenttype": 177,
    "created_by": 1,
    "updated_by": null,
    "created": "2020-05-19T12:13:19.033123+02:00",
    "updated": "2020-09-15T13:16:29.324660+02:00"
  },
  {
    "id": 29,
    "title": "Product Tree",
    "description": null,
    "status": 1,
    "status_display": "To do",
    "status_change_date": "2021-11-30T18:16:53.045049+01:00",
    "custom_due_date": null,
    "due_date": "2020-08-29",
    "start_date": null,
    "duration": 11,
    "duration_unit": "days",
    "members": [],
    "groups": [],
    "archived": false,
    "public": true,
    "tags": [],
    "project": 24,
    "milestone": 11,
    "content_type": null,
    "object_id": null,
    "parent": null,
    "orders": [],
    "deliverables": [],
    "dependencies": [
      17
    ],
    "timeline_data": {
      "orders": [],
      "objects": [],
      "duration": 1.6,
      "end_time": 3.6,
      "delay_time": 0,
      "start_time": 2,
      "deliverables": [],
      "dependencies": [
        17
      ],
      "missing_time": 0,
      "timeline_unit": "weeks",
      "future_objects": [
        "171-9"
      ],
      "pre_req_objects": []
    },
    "contenttype": 177,
    "created_by": 1,
    "updated_by": 117,
    "created": "2020-05-21T17:39:14.204813+02:00",
    "updated": "2021-11-30T18:16:53.045035+01:00"
  },
  {
    "id": 100,
    "title": "aaaaaaaaaaaaaaaaaaaa",
    "description": "<p>aa</p>",
    "status": 1,
    "status_display": "To do",
    "status_change_date": "2021-11-15T18:39:55.919770+01:00",
    "custom_due_date": null,
    "due_date": null,
    "start_date": null,
    "duration": 10,
    "duration_unit": "days",
    "members": [],
    "groups": [],
    "archived": false,
    "public": true,
    "tags": [],
    "project": 24,
    "milestone": null,
    "content_type": null,
    "object_id": null,
    "parent": null,
    "orders": [],
    "deliverables": [],
    "dependencies": [],
    "timeline_data": {
      "orders": [],
      "objects": [],
      "duration": 1.4,
      "end_time": 1.4,
      "delay_time": 0,
      "start_time": 0,
      "deliverables": [],
      "dependencies": [],
      "missing_time": 0,
      "timeline_unit": "weeks",
      "future_objects": [],
      "pre_req_objects": []
    },
    "contenttype": 177,
    "created_by": 117,
    "updated_by": 117,
    "created": "2021-11-15T18:39:44.382365+01:00",
    "updated": "2021-11-15T18:39:55.919757+01:00"
  },
  {
    "id": 117,
    "title": "test",
    "description": null,
    "status": 1,
    "status_display": "To do",
    "status_change_date": "2021-12-02T18:40:59.711492+01:00",
    "custom_due_date": null,
    "due_date": null,
    "start_date": null,
    "duration": 1,
    "duration_unit": "days",
    "members": [],
    "groups": [],
    "archived": false,
    "public": true,
    "tags": [],
    "project": 24,
    "milestone": null,
    "content_type": null,
    "object_id": null,
    "parent": null,
    "orders": [],
    "deliverables": [],
    "dependencies": [],
    "timeline_data": {
      "orders": [],
      "objects": [],
      "duration": 0.1,
      "end_time": 0.1,
      "delay_time": 0,
      "start_time": 0,
      "deliverables": [],
      "dependencies": [],
      "missing_time": 0,
      "timeline_unit": "weeks",
      "future_objects": [],
      "pre_req_objects": []
    },
    "contenttype": 177,
    "created_by": 49,
    "updated_by": 49,
    "created": "2021-12-02T18:40:44.378319+01:00",
    "updated": "2021-12-02T18:40:59.711478+01:00"
  },
  {
    "id": 35,
    "title": "Specification Tree",
    "description": "ECSS-E-ST-10",
    "status": 1,
    "status_display": "To do",
    "status_change_date": "2020-05-29T19:08:40.885512+02:00",
    "custom_due_date": null,
    "due_date": "2020-09-01",
    "start_date": null,
    "duration": 10,
    "duration_unit": "days",
    "members": [],
    "groups": [],
    "archived": false,
    "public": true,
    "tags": [],
    "project": 24,
    "milestone": 7,
    "content_type": null,
    "object_id": null,
    "parent": null,
    "orders": [],
    "deliverables": [],
    "dependencies": [
      33
    ],
    "timeline_data": {
      "orders": [],
      "objects": [],
      "duration": 1.4,
      "end_time": 11.9,
      "delay_time": 0,
      "start_time": 10.4,
      "deliverables": [],
      "dependencies": [
        33
      ],
      "missing_time": 0,
      "timeline_unit": "weeks",
      "future_objects": [],
      "pre_req_objects": [
        "171-5",
        "36-3040",
        "171-6"
      ]
    },
    "contenttype": 177,
    "created_by": 1,
    "updated_by": null,
    "created": "2020-05-21T17:53:38.313458+02:00",
    "updated": "2020-05-29T19:08:40.885495+02:00"
  },
  {
    "id": 174,
    "title": "Custom Requirement Specification",
    "description": null,
    "status": 1,
    "status_display": "To do",
    "status_change_date": "2022-03-14T19:51:20.753602+01:00",
    "custom_due_date": null,
    "due_date": null,
    "start_date": null,
    "duration": 1,
    "duration_unit": "days",
    "members": [],
    "groups": [],
    "archived": false,
    "public": true,
    "tags": [],
    "project": 24,
    "milestone": null,
    "content_type": null,
    "object_id": null,
    "parent": null,
    "orders": [],
    "deliverables": [],
    "dependencies": [],
    "timeline_data": {
      "orders": [],
      "objects": [],
      "duration": 0.1,
      "end_time": 0.1,
      "delay_time": 0,
      "start_time": 0,
      "deliverables": [],
      "dependencies": [],
      "missing_time": 0,
      "timeline_unit": "weeks",
      "future_objects": [],
      "pre_req_objects": []
    },
    "contenttype": 177,
    "created_by": 96,
    "updated_by": 96,
    "created": "2022-03-14T19:51:06.461984+01:00",
    "updated": "2022-03-14T19:51:20.753588+01:00"
  },
  {
    "id": 8,
    "title": "Preliminary Requirements Specification",
    "description": "Preliminary technical requirements specification for ValiSat",
    "status": 42,
    "status_display": "Completed",
    "status_change_date": "2020-05-29T19:08:40.749438+02:00",
    "custom_due_date": null,
    "due_date": "2020-08-01",
    "start_date": null,
    "duration": 29,
    "duration_unit": "days",
    "members": [
      1
    ],
    "groups": [],
    "archived": false,
    "public": true,
    "tags": [],
    "project": 24,
    "milestone": 5,
    "content_type": null,
    "object_id": null,
    "parent": null,
    "orders": [
      2
    ],
    "deliverables": [
      3
    ],
    "dependencies": [
      17
    ],
    "timeline_data": {
      "orders": [
        "171-5"
      ],
      "objects": [],
      "duration": 4.1,
      "end_time": 6.1,
      "delay_time": 0,
      "start_time": 2,
      "deliverables": [
        "171-6"
      ],
      "dependencies": [
        17
      ],
      "missing_time": 0,
      "timeline_unit": "weeks",
      "future_objects": [
        "36-3040",
        "171-4",
        "21-2956",
        "171-112",
        "171-6"
      ],
      "pre_req_objects": [
        "171-5"
      ]
    },
    "contenttype": 177,
    "created_by": 1,
    "updated_by": null,
    "created": "2020-05-18T20:31:23.332411+02:00",
    "updated": "2020-05-29T19:08:40.749421+02:00"
  },
  {
    "id": 26,
    "title": "Verification Plan",
    "description": "ECSS-E-ST-10-02",
    "status": 1,
    "status_display": "To do",
    "status_change_date": "2021-09-17T00:46:03.244454+02:00",
    "custom_due_date": "2020-07-23",
    "due_date": "2020-07-23",
    "start_date": null,
    "duration": 15,
    "duration_unit": "days",
    "members": [],
    "groups": [],
    "archived": false,
    "public": true,
    "tags": [],
    "project": 24,
    "milestone": 11,
    "content_type": null,
    "object_id": null,
    "parent": null,
    "orders": [
      4
    ],
    "deliverables": [],
    "dependencies": [
      8
    ],
    "timeline_data": {
      "orders": [
        "171-6"
      ],
      "objects": [],
      "duration": 2.1,
      "end_time": 8.3,
      "delay_time": 0,
      "start_time": 6.1,
      "deliverables": [],
      "dependencies": [
        8
      ],
      "missing_time": 1,
      "timeline_unit": "weeks",
      "future_objects": [],
      "pre_req_objects": [
        "171-5",
        "171-6"
      ]
    },
    "contenttype": 177,
    "created_by": 1,
    "updated_by": 1,
    "created": "2020-05-21T17:33:24.956120+02:00",
    "updated": "2021-09-17T00:46:03.244439+02:00"
  },
  {
    "id": 98,
    "title": "re",
    "description": null,
    "status": 1,
    "status_display": "To do",
    "status_change_date": "2021-11-15T18:17:42.534876+01:00",
    "custom_due_date": "2021-11-18",
    "due_date": "2021-11-18",
    "start_date": "2021-11-17",
    "duration": 1,
    "duration_unit": "days",
    "members": [],
    "groups": [],
    "archived": false,
    "public": true,
    "tags": [],
    "project": 24,
    "milestone": 7,
    "content_type": null,
    "object_id": null,
    "parent": null,
    "orders": [],
    "deliverables": [],
    "dependencies": [],
    "timeline_data": {
      "orders": [],
      "objects": [],
      "duration": 0.1,
      "end_time": 76.3,
      "delay_time": 0,
      "start_time": 76.1,
      "deliverables": [],
      "dependencies": [],
      "missing_time": 0,
      "timeline_unit": "weeks",
      "future_objects": [],
      "pre_req_objects": []
    },
    "contenttype": 177,
    "created_by": 117,
    "updated_by": 117,
    "created": "2021-11-15T18:17:24.478994+01:00",
    "updated": "2021-11-15T18:17:42.534862+01:00"
  },
  {
    "id": 92,
    "title": "Hello dude!",
    "description": null,
    "status": 1,
    "status_display": "To do",
    "status_change_date": "2021-11-23T12:37:32.959999+01:00",
    "custom_due_date": null,
    "due_date": null,
    "start_date": "2021-06-08",
    "duration": 3,
    "duration_unit": "days",
    "members": [
      117
    ],
    "groups": [],
    "archived": false,
    "public": true,
    "tags": [],
    "project": 24,
    "milestone": null,
    "content_type": null,
    "object_id": null,
    "parent": null,
    "orders": [],
    "deliverables": [],
    "dependencies": [],
    "timeline_data": {
      "orders": [],
      "objects": [],
      "duration": 0.4,
      "end_time": 53.4,
      "delay_time": 0,
      "start_time": 53,
      "deliverables": [],
      "dependencies": [],
      "missing_time": 0,
      "timeline_unit": "weeks",
      "future_objects": [],
      "pre_req_objects": []
    },
    "contenttype": 177,
    "created_by": 1,
    "updated_by": 1,
    "created": "2021-11-05T11:56:22.050584+01:00",
    "updated": "2021-11-23T12:37:32.959985+01:00"
  },
  {
    "id": 14,
    "title": "Qualification and Production",
    "description": "Finalises the development of the system by qualification and acceptance \n\nFinalise preparation for operations and utilisation",
    "status": 1,
    "status_display": "To do",
    "status_change_date": "2020-05-29T19:08:41.150825+02:00",
    "custom_due_date": null,
    "due_date": null,
    "start_date": null,
    "duration": 20,
    "duration_unit": "days",
    "members": [],
    "groups": [],
    "archived": false,
    "public": true,
    "tags": [],
    "project": 24,
    "milestone": null,
    "content_type": null,
    "object_id": null,
    "parent": null,
    "orders": [
      59
    ],
    "deliverables": [
      46
    ],
    "dependencies": [
      11,
      12
    ],
    "timeline_data": {
      "orders": [
        "21-2956"
      ],
      "objects": [],
      "duration": 2.9,
      "end_time": 18.9,
      "delay_time": 0,
      "start_time": 16,
      "deliverables": [
        "36-3040"
      ],
      "dependencies": [
        24,
        11,
        12
      ],
      "missing_time": 0,
      "timeline_unit": "weeks",
      "future_objects": [
        "36-3040"
      ],
      "pre_req_objects": [
        "171-5",
        "171-4",
        "171-2",
        "21-2956",
        "171-110",
        "171-6"
      ]
    },
    "contenttype": 177,
    "created_by": 1,
    "updated_by": null,
    "created": "2020-05-19T12:36:08.277586+02:00",
    "updated": "2020-05-29T19:08:41.150808+02:00"
  },
  {
    "id": 5030,
    "title": "New task",
    "description": null,
    "status": 1,
    "status_display": "To do",
    "status_change_date": "2022-07-09T13:04:38.425736+02:00",
    "custom_due_date": null,
    "due_date": null,
    "start_date": null,
    "duration": 1,
    "duration_unit": "days",
    "members": [],
    "groups": [],
    "archived": false,
    "public": true,
    "tags": [],
    "project": 24,
    "milestone": null,
    "content_type": null,
    "object_id": null,
    "parent": null,
    "orders": [],
    "deliverables": [],
    "dependencies": [],
    "timeline_data": {
      "orders": [],
      "objects": [],
      "duration": 0.1,
      "end_time": 0.1,
      "delay_time": 0,
      "start_time": 0,
      "deliverables": [],
      "dependencies": [],
      "missing_time": 0,
      "timeline_unit": "weeks",
      "future_objects": [],
      "pre_req_objects": []
    },
    "contenttype": 177,
    "created_by": 98,
    "updated_by": null,
    "created": "2022-07-09T13:04:38.425687+02:00",
    "updated": "2022-07-09T13:04:38.425710+02:00"
  },
  {
    "id": 12,
    "title": "Detailed CAD Model",
    "description": null,
    "status": 1,
    "status_display": "To do",
    "status_change_date": "2021-11-15T19:54:13.531461+01:00",
    "custom_due_date": "2021-11-18",
    "due_date": "2021-11-18",
    "start_date": null,
    "duration": 20,
    "duration_unit": "days",
    "members": [],
    "groups": [],
    "archived": false,
    "public": true,
    "tags": [],
    "project": 24,
    "milestone": null,
    "content_type": null,
    "object_id": null,
    "parent": null,
    "orders": [],
    "deliverables": [],
    "dependencies": [
      11
    ],
    "timeline_data": {
      "orders": [],
      "objects": [],
      "duration": 2.9,
      "end_time": 16,
      "delay_time": 0,
      "start_time": 13.1,
      "deliverables": [],
      "dependencies": [
        11
      ],
      "missing_time": 0,
      "timeline_unit": "weeks",
      "future_objects": [
        "36-3040"
      ],
      "pre_req_objects": [
        "171-5",
        "171-4",
        "171-2",
        "171-110",
        "171-6"
      ]
    },
    "contenttype": 177,
    "created_by": 1,
    "updated_by": 39,
    "created": "2020-05-19T12:26:29.621318+02:00",
    "updated": "2021-11-15T19:54:13.531448+01:00"
  },
  {
    "id": 40,
    "title": "Correlation report",
    "description": null,
    "status": 1,
    "status_display": "To do",
    "status_change_date": "2020-06-01T10:43:32.692754+02:00",
    "custom_due_date": null,
    "due_date": "2020-10-22",
    "start_date": null,
    "duration": 15,
    "duration_unit": "days",
    "members": [],
    "groups": [],
    "archived": false,
    "public": true,
    "tags": [],
    "project": 24,
    "milestone": 8,
    "content_type": null,
    "object_id": null,
    "parent": null,
    "orders": [],
    "deliverables": [],
    "dependencies": [
      37
    ],
    "timeline_data": {
      "orders": [],
      "objects": [],
      "duration": 2.1,
      "end_time": 27.4,
      "delay_time": 0,
      "start_time": 25.3,
      "deliverables": [],
      "dependencies": [
        37
      ],
      "missing_time": 7.1,
      "timeline_unit": "weeks",
      "future_objects": [],
      "pre_req_objects": [
        "171-5",
        "36-3040",
        "171-4",
        "171-2",
        "21-2956",
        "171-6"
      ]
    },
    "contenttype": 177,
    "created_by": 1,
    "updated_by": null,
    "created": "2020-05-21T18:05:30.639314+02:00",
    "updated": "2020-06-01T10:43:32.692736+02:00"
  },
  {
    "id": 95,
    "title": "aaa",
    "description": "<p>bbbb</p>",
    "status": 1,
    "status_display": "To do",
    "status_change_date": "2021-11-09T16:53:45.932955+01:00",
    "custom_due_date": null,
    "due_date": null,
    "start_date": null,
    "duration": 5,
    "duration_unit": "days",
    "members": [
      67
    ],
    "groups": [],
    "archived": false,
    "public": true,
    "tags": [
      9
    ],
    "project": 24,
    "milestone": null,
    "content_type": null,
    "object_id": null,
    "parent": null,
    "orders": [],
    "deliverables": [],
    "dependencies": [
      41
    ],
    "timeline_data": {
      "orders": [],
      "objects": [],
      "duration": 0.7,
      "end_time": 10.4,
      "delay_time": 0,
      "start_time": 9.7,
      "deliverables": [],
      "dependencies": [
        41
      ],
      "missing_time": 0,
      "timeline_unit": "weeks",
      "future_objects": [],
      "pre_req_objects": [
        "171-5",
        "171-6"
      ]
    },
    "contenttype": 177,
    "created_by": 117,
    "updated_by": 117,
    "created": "2021-11-09T16:53:07.627301+01:00",
    "updated": "2021-11-09T16:53:45.932940+01:00"
  },
  {
    "id": 82,
    "title": "New task",
    "description": null,
    "status": 1,
    "status_display": "To do",
    "status_change_date": "2021-10-26T10:50:01.259008+02:00",
    "custom_due_date": null,
    "due_date": null,
    "start_date": null,
    "duration": 1,
    "duration_unit": "days",
    "members": [],
    "groups": [],
    "archived": false,
    "public": true,
    "tags": [],
    "project": 24,
    "milestone": null,
    "content_type": null,
    "object_id": null,
    "parent": null,
    "orders": [],
    "deliverables": [
      12
    ],
    "dependencies": [],
    "timeline_data": {
      "orders": [],
      "objects": [],
      "duration": 0.1,
      "end_time": 0.1,
      "delay_time": 0,
      "start_time": 0,
      "deliverables": [
        "21-2983"
      ],
      "dependencies": [],
      "missing_time": 0,
      "timeline_unit": "weeks",
      "future_objects": [
        "21-2983"
      ],
      "pre_req_objects": []
    },
    "contenttype": 177,
    "created_by": 1,
    "updated_by": null,
    "created": "2021-10-26T10:50:01.258955+02:00",
    "updated": "2021-10-26T10:50:01.258979+02:00"
  },
  {
    "id": 36,
    "title": "Design Justification",
    "description": "req traceability wrt next lower level, req justification file, system concept report, trade-off reports, verification control doc, test spec, analysis rep, math model description, correlation rep, test procedure, test rep, verification rep, DJF for next lower level, review-of-design rep, inspection rep, GSE spec’s, GSE data pack’s",
    "status": 2,
    "status_display": "Started",
    "status_change_date": "2020-06-01T10:43:32.720280+02:00",
    "custom_due_date": null,
    "due_date": "2020-08-29",
    "start_date": null,
    "duration": 10,
    "duration_unit": "days",
    "members": [
      1
    ],
    "groups": [],
    "archived": false,
    "public": true,
    "tags": [],
    "project": 24,
    "milestone": 11,
    "content_type": null,
    "object_id": null,
    "parent": null,
    "orders": [],
    "deliverables": [],
    "dependencies": [
      28
    ],
    "timeline_data": {
      "orders": [],
      "objects": [],
      "duration": 1.4,
      "end_time": 23.9,
      "delay_time": 0,
      "start_time": 22.4,
      "deliverables": [],
      "dependencies": [
        28
      ],
      "missing_time": 11.3,
      "timeline_unit": "weeks",
      "future_objects": [],
      "pre_req_objects": [
        "21-2956",
        "36-3040",
        "171-4"
      ]
    },
    "contenttype": 177,
    "created_by": 1,
    "updated_by": null,
    "created": "2020-05-21T17:56:15.022454+02:00",
    "updated": "2020-06-01T10:43:32.720264+02:00"
  },
  {
    "id": 128,
    "title": "Rui Test change start date task",
    "description": null,
    "status": 1,
    "status_display": "To do",
    "status_change_date": "2022-01-04T18:15:43.641154+01:00",
    "custom_due_date": null,
    "due_date": null,
    "start_date": null,
    "duration": 1,
    "duration_unit": "days",
    "members": [],
    "groups": [],
    "archived": false,
    "public": true,
    "tags": [],
    "project": 24,
    "milestone": null,
    "content_type": null,
    "object_id": null,
    "parent": null,
    "orders": [],
    "deliverables": [],
    "dependencies": [],
    "timeline_data": {
      "orders": [],
      "objects": [],
      "duration": 0.1,
      "end_time": 0.1,
      "delay_time": 0,
      "start_time": 0,
      "deliverables": [],
      "dependencies": [],
      "missing_time": 0,
      "timeline_unit": "weeks",
      "future_objects": [],
      "pre_req_objects": []
    },
    "contenttype": 177,
    "created_by": 61,
    "updated_by": 61,
    "created": "2022-01-04T18:15:32.947002+01:00",
    "updated": "2022-01-04T18:15:43.641140+01:00"
  },
  {
    "id": 11,
    "title": "Detailed ValiSat Design",
    "description": "Establish system detailed definition \nDemonstrate capability to meet the technical requirements",
    "status": 1,
    "status_display": "To do",
    "status_change_date": "2021-11-15T19:54:47.155538+01:00",
    "custom_due_date": "2021-11-24",
    "due_date": "2021-11-24",
    "start_date": null,
    "duration": 20,
    "duration_unit": "days",
    "members": [],
    "groups": [],
    "archived": false,
    "public": true,
    "tags": [],
    "project": 24,
    "milestone": null,
    "content_type": null,
    "object_id": null,
    "parent": null,
    "orders": [
      24,
      25
    ],
    "deliverables": [
      15
    ],
    "dependencies": [
      10
    ],
    "timeline_data": {
      "orders": [
        "171-110",
        "171-4"
      ],
      "objects": [
        "171-110"
      ],
      "duration": 2.9,
      "end_time": 13.1,
      "delay_time": 0,
      "start_time": 10.3,
      "deliverables": [
        "171-112"
      ],
      "dependencies": [
        10
      ],
      "missing_time": 0,
      "timeline_unit": "weeks",
      "future_objects": [
        "171-112",
        "36-3040"
      ],
      "pre_req_objects": [
        "171-5",
        "171-4",
        "171-2",
        "171-110",
        "171-6"
      ]
    },
    "contenttype": 177,
    "created_by": 1,
    "updated_by": 39,
    "created": "2020-05-19T12:26:01.595603+02:00",
    "updated": "2021-11-15T19:54:47.155524+01:00"
  },
  {
    "id": 218,
    "title": "New task",
    "description": null,
    "status": 1,
    "status_display": "To do",
    "status_change_date": "2022-05-13T12:25:31.473109+02:00",
    "custom_due_date": null,
    "due_date": null,
    "start_date": null,
    "duration": 1,
    "duration_unit": "days",
    "members": [],
    "groups": [],
    "archived": false,
    "public": true,
    "tags": [],
    "project": 24,
    "milestone": null,
    "content_type": null,
    "object_id": null,
    "parent": null,
    "orders": [],
    "deliverables": [],
    "dependencies": [],
    "timeline_data": {
      "orders": [],
      "objects": [],
      "duration": 0.1,
      "end_time": 0.1,
      "delay_time": 0,
      "start_time": 0,
      "deliverables": [],
      "dependencies": [],
      "missing_time": 0,
      "timeline_unit": "weeks",
      "future_objects": [],
      "pre_req_objects": []
    },
    "contenttype": 177,
    "created_by": 98,
    "updated_by": null,
    "created": "2022-05-13T12:25:31.473060+02:00",
    "updated": "2022-05-13T12:25:31.473082+02:00"
  },
  {
    "id": 28,
    "title": "Design Definition",
    "description": "function tree, product tree, spec tree, tech budget, TS for next lower level, DDF for next lower level, interface control doc, product user manual, ..",
    "status": 2,
    "status_display": "Started",
    "status_change_date": "2020-06-01T10:43:39.360033+02:00",
    "custom_due_date": null,
    "due_date": "2020-08-29",
    "start_date": null,
    "duration": 25,
    "duration_unit": "days",
    "members": [],
    "groups": [],
    "archived": false,
    "public": true,
    "tags": [],
    "project": 24,
    "milestone": 11,
    "content_type": null,
    "object_id": null,
    "parent": null,
    "orders": [
      51,
      58,
      78
    ],
    "deliverables": [
      5
    ],
    "dependencies": [
      17
    ],
    "timeline_data": {
      "orders": [
        "171-4",
        "21-2956",
        "36-3040"
      ],
      "objects": [],
      "duration": 3.6,
      "end_time": 22.4,
      "delay_time": 0,
      "start_time": 18.9,
      "deliverables": [
        "171-8"
      ],
      "dependencies": [
        24,
        17,
        10,
        14
      ],
      "missing_time": 9.9,
      "timeline_unit": "weeks",
      "future_objects": [
        "171-8"
      ],
      "pre_req_objects": [
        "21-2956",
        "36-3040",
        "171-4"
      ]
    },
    "contenttype": 177,
    "created_by": 1,
    "updated_by": null,
    "created": "2020-05-21T17:38:11.635089+02:00",
    "updated": "2020-06-01T10:43:39.360016+02:00"
  },
  {
    "id": 27,
    "title": "Orbital Debris Mitigation Plan",
    "description": "ISO 24113",
    "status": 2,
    "status_display": "Started",
    "status_change_date": "2020-05-25T08:50:02.354330+02:00",
    "custom_due_date": null,
    "due_date": "2020-08-29",
    "start_date": null,
    "duration": 18,
    "duration_unit": "days",
    "members": [],
    "groups": [],
    "archived": false,
    "public": true,
    "tags": [],
    "project": 24,
    "milestone": 11,
    "content_type": null,
    "object_id": null,
    "parent": null,
    "orders": [],
    "deliverables": [],
    "dependencies": [
      17
    ],
    "timeline_data": {
      "orders": [],
      "objects": [],
      "duration": 2.6,
      "end_time": 4.6,
      "delay_time": 0,
      "start_time": 2,
      "deliverables": [],
      "dependencies": [
        17
      ],
      "missing_time": 0,
      "timeline_unit": "weeks",
      "future_objects": [],
      "pre_req_objects": []
    },
    "contenttype": 177,
    "created_by": 1,
    "updated_by": null,
    "created": "2020-05-21T17:35:54.141016+02:00",
    "updated": "2020-05-25T08:50:02.354313+02:00"
  },
  {
    "id": 33,
    "title": "Technical Requirements Specifications",
    "description": "ECSS-E-ST-10-06",
    "status": 42,
    "status_display": "Completed",
    "status_change_date": "2020-05-29T19:08:40.847388+02:00",
    "custom_due_date": null,
    "due_date": "2020-09-01",
    "start_date": null,
    "duration": 11,
    "duration_unit": "days",
    "members": [],
    "groups": [],
    "archived": false,
    "public": true,
    "tags": [],
    "project": 24,
    "milestone": 7,
    "content_type": null,
    "object_id": null,
    "parent": null,
    "orders": [
      3
    ],
    "deliverables": [],
    "dependencies": [
      8,
      24
    ],
    "timeline_data": {
      "orders": [
        "171-6"
      ],
      "objects": [],
      "duration": 1.6,
      "end_time": 10.4,
      "delay_time": 0,
      "start_time": 8.9,
      "deliverables": [],
      "dependencies": [
        8,
        24
      ],
      "missing_time": 0,
      "timeline_unit": "weeks",
      "future_objects": [],
      "pre_req_objects": [
        "171-5",
        "36-3040",
        "171-6"
      ]
    },
    "contenttype": 177,
    "created_by": 1,
    "updated_by": null,
    "created": "2020-05-21T17:50:41.217940+02:00",
    "updated": "2020-05-29T19:08:40.847371+02:00"
  },
  {
    "id": 94,
    "title": "a",
    "description": null,
    "status": 1,
    "status_display": "To do",
    "status_change_date": "2021-12-16T18:12:30.258680+01:00",
    "custom_due_date": null,
    "due_date": null,
    "start_date": null,
    "duration": 1,
    "duration_unit": "days",
    "members": [
      67
    ],
    "groups": [],
    "archived": false,
    "public": true,
    "tags": [],
    "project": 24,
    "milestone": null,
    "content_type": null,
    "object_id": null,
    "parent": null,
    "orders": [],
    "deliverables": [],
    "dependencies": [],
    "timeline_data": {
      "orders": [],
      "objects": [],
      "duration": 0.1,
      "end_time": 0.1,
      "delay_time": 0,
      "start_time": 0,
      "deliverables": [],
      "dependencies": [],
      "missing_time": 0,
      "timeline_unit": "weeks",
      "future_objects": [],
      "pre_req_objects": []
    },
    "contenttype": 177,
    "created_by": 117,
    "updated_by": 117,
    "created": "2021-11-09T16:51:44.380634+01:00",
    "updated": "2021-12-16T18:12:30.258666+01:00"
  },
  {
    "id": 80,
    "title": "New task",
    "description": null,
    "status": 1,
    "status_display": "To do",
    "status_change_date": "2021-10-26T10:46:24.441872+02:00",
    "custom_due_date": null,
    "due_date": null,
    "start_date": null,
    "duration": 1,
    "duration_unit": "days",
    "members": [],
    "groups": [],
    "archived": false,
    "public": true,
    "tags": [],
    "project": 24,
    "milestone": null,
    "content_type": null,
    "object_id": null,
    "parent": null,
    "orders": [],
    "deliverables": [
      9
    ],
    "dependencies": [],
    "timeline_data": {
      "orders": [],
      "objects": [],
      "duration": 0.1,
      "end_time": 0.1,
      "delay_time": 0,
      "start_time": 0,
      "deliverables": [
        "21-2954"
      ],
      "dependencies": [],
      "missing_time": 0,
      "timeline_unit": "weeks",
      "future_objects": [
        "21-2954"
      ],
      "pre_req_objects": []
    },
    "contenttype": 177,
    "created_by": 1,
    "updated_by": null,
    "created": "2021-10-26T10:46:24.441821+02:00",
    "updated": "2021-10-26T10:46:24.441844+02:00"
  },
  {
    "id": 41,
    "title": "Test Procedure",
    "description": null,
    "status": 1,
    "status_display": "To do",
    "status_change_date": "2020-05-29T19:08:41.224430+02:00",
    "custom_due_date": null,
    "due_date": "2020-10-22",
    "start_date": null,
    "duration": 10,
    "duration_unit": "days",
    "members": [],
    "groups": [],
    "archived": false,
    "public": true,
    "tags": [],
    "project": 24,
    "milestone": 8,
    "content_type": null,
    "object_id": null,
    "parent": null,
    "orders": [],
    "deliverables": [],
    "dependencies": [
      26
    ],
    "timeline_data": {
      "orders": [],
      "objects": [],
      "duration": 1.4,
      "end_time": 9.7,
      "delay_time": 0,
      "start_time": 8.3,
      "deliverables": [],
      "dependencies": [
        26
      ],
      "missing_time": 0,
      "timeline_unit": "weeks",
      "future_objects": [],
      "pre_req_objects": [
        "171-5",
        "171-6"
      ]
    },
    "contenttype": 177,
    "created_by": 1,
    "updated_by": null,
    "created": "2020-05-21T18:06:14.368325+02:00",
    "updated": "2020-05-29T19:08:41.224413+02:00"
  },
  {
    "id": 121,
    "title": "New task",
    "description": null,
    "status": 1,
    "status_display": "To do",
    "status_change_date": "2021-12-03T16:49:03.483544+01:00",
    "custom_due_date": null,
    "due_date": null,
    "start_date": null,
    "duration": 1,
    "duration_unit": "hours",
    "members": [],
    "groups": [],
    "archived": false,
    "public": true,
    "tags": [],
    "project": 24,
    "milestone": null,
    "content_type": null,
    "object_id": null,
    "parent": null,
    "orders": [],
    "deliverables": [],
    "dependencies": [],
    "timeline_data": {
      "orders": [],
      "objects": [],
      "duration": 0,
      "end_time": 0,
      "delay_time": 0,
      "start_time": 0,
      "deliverables": [],
      "dependencies": [],
      "missing_time": 0,
      "timeline_unit": "weeks",
      "future_objects": [],
      "pre_req_objects": []
    },
    "contenttype": 177,
    "created_by": 1,
    "updated_by": 1,
    "created": "2021-12-03T16:48:38.185871+01:00",
    "updated": "2021-12-03T16:49:03.483527+01:00"
  },
  {
    "id": 38,
    "title": "AIT QM/FM plan",
    "description": null,
    "status": 1,
    "status_display": "To do",
    "status_change_date": "2020-05-29T19:08:41.116183+02:00",
    "custom_due_date": "2020-07-26",
    "due_date": "2020-07-26",
    "start_date": null,
    "duration": 10,
    "duration_unit": "days",
    "members": [
      117
    ],
    "groups": [],
    "archived": false,
    "public": true,
    "tags": [],
    "project": 24,
    "milestone": 2,
    "content_type": 21,
    "object_id": 2956,
    "parent": null,
    "orders": [],
    "deliverables": [],
    "dependencies": [
      26
    ],
    "timeline_data": {
      "orders": [],
      "objects": [],
      "duration": 1.4,
      "end_time": 9.7,
      "delay_time": 0,
      "start_time": 8.3,
      "deliverables": [],
      "dependencies": [
        26
      ],
      "missing_time": 2,
      "timeline_unit": "weeks",
      "future_objects": [],
      "pre_req_objects": [
        "171-5",
        "171-6"
      ]
    },
    "contenttype": 177,
    "created_by": 1,
    "updated_by": null,
    "created": "2020-05-21T18:02:07.936306+02:00",
    "updated": "2020-05-29T19:08:41.116165+02:00"
  },
  {
    "id": 133,
    "title": "ValiSat.Mission.Operations",
    "description": null,
    "status": 1,
    "status_display": "To do",
    "status_change_date": "2022-01-11T14:35:30.166099+01:00",
    "custom_due_date": null,
    "due_date": null,
    "start_date": null,
    "duration": 1,
    "duration_unit": "days",
    "members": [],
    "groups": [],
    "archived": false,
    "public": true,
    "tags": [],
    "project": 24,
    "milestone": null,
    "content_type": null,
    "object_id": null,
    "parent": null,
    "orders": [],
    "deliverables": [
      19
    ],
    "dependencies": [],
    "timeline_data": {
      "orders": [],
      "objects": [],
      "duration": 0.1,
      "end_time": 0.1,
      "delay_time": 0,
      "start_time": 0,
      "deliverables": [
        "21-2887"
      ],
      "dependencies": [],
      "missing_time": 0,
      "timeline_unit": "weeks",
      "future_objects": [
        "21-2887"
      ],
      "pre_req_objects": []
    },
    "contenttype": 177,
    "created_by": 1,
    "updated_by": 1,
    "created": "2022-01-11T14:35:21.339027+01:00",
    "updated": "2022-01-11T14:35:30.166085+01:00"
  },
  {
    "id": 9,
    "title": "Concept Design",
    "description": "Create concept design for ValiSat",
    "status": 42,
    "status_display": "Completed",
    "status_change_date": "2020-05-29T19:08:40.920339+02:00",
    "custom_due_date": null,
    "due_date": null,
    "start_date": null,
    "duration": 12,
    "duration_unit": "days",
    "members": [],
    "groups": [],
    "archived": false,
    "public": true,
    "tags": [],
    "project": 24,
    "milestone": null,
    "content_type": null,
    "object_id": null,
    "parent": null,
    "orders": [
      5,
      7
    ],
    "deliverables": [],
    "dependencies": [
      8
    ],
    "timeline_data": {
      "orders": [
        "171-6",
        "171-2"
      ],
      "objects": [
        "171-2"
      ],
      "duration": 1.7,
      "end_time": 7.9,
      "delay_time": 0,
      "start_time": 6.1,
      "deliverables": [],
      "dependencies": [
        8
      ],
      "missing_time": 0,
      "timeline_unit": "weeks",
      "future_objects": [
        "171-112",
        "36-3040",
        "171-4"
      ],
      "pre_req_objects": [
        "171-5",
        "171-2",
        "171-6"
      ]
    },
    "contenttype": 177,
    "created_by": 1,
    "updated_by": null,
    "created": "2020-05-18T20:31:57.753304+02:00",
    "updated": "2020-05-29T19:08:40.920323+02:00"
  },
  {
    "id": 83,
    "title": "New task",
    "description": null,
    "status": 1,
    "status_display": "To do",
    "status_change_date": "2021-10-26T10:53:25.938054+02:00",
    "custom_due_date": null,
    "due_date": null,
    "start_date": null,
    "duration": 1,
    "duration_unit": "days",
    "members": [],
    "groups": [],
    "archived": false,
    "public": true,
    "tags": [],
    "project": 24,
    "milestone": null,
    "content_type": null,
    "object_id": null,
    "parent": null,
    "orders": [],
    "deliverables": [
      13
    ],
    "dependencies": [],
    "timeline_data": {
      "orders": [],
      "objects": [],
      "duration": 0.1,
      "end_time": 0.1,
      "delay_time": 0,
      "start_time": 0,
      "deliverables": [
        "21-2927"
      ],
      "dependencies": [],
      "missing_time": 0,
      "timeline_unit": "weeks",
      "future_objects": [
        "21-2927"
      ],
      "pre_req_objects": []
    },
    "contenttype": 177,
    "created_by": 1,
    "updated_by": 1,
    "created": "2021-10-26T10:53:16.975265+02:00",
    "updated": "2021-10-26T10:53:25.938040+02:00"
  },
  {
    "id": 201,
    "title": "Satellite System Testing",
    "description": null,
    "status": 1,
    "status_display": "To do",
    "status_change_date": "2022-05-10T18:10:13.638743+02:00",
    "custom_due_date": null,
    "due_date": null,
    "start_date": null,
    "duration": 71,
    "duration_unit": "days",
    "members": [],
    "groups": [],
    "archived": false,
    "public": true,
    "tags": [],
    "project": 24,
    "milestone": null,
    "content_type": null,
    "object_id": null,
    "parent": null,
    "orders": [
      57
    ],
    "deliverables": [
      31
    ],
    "dependencies": [],
    "timeline_data": {
      "orders": [
        "21-2863"
      ],
      "objects": [
        "21-2863"
      ],
      "duration": 10.1,
      "end_time": 10.1,
      "delay_time": 0,
      "start_time": 0,
      "deliverables": [
        "21-2898"
      ],
      "dependencies": [],
      "missing_time": 0,
      "timeline_unit": "weeks",
      "future_objects": [
        "21-2898"
      ],
      "pre_req_objects": [
        "21-2863"
      ]
    },
    "contenttype": 177,
    "created_by": 49,
    "updated_by": 49,
    "created": "2022-05-10T18:08:42.010348+02:00",
    "updated": "2022-05-10T18:10:13.638728+02:00"
  },
  {
    "id": 17,
    "title": "Mission Description",
    "description": "high level description of mission concept, including preferred concept",
    "status": 42,
    "status_display": "Completed",
    "status_change_date": "2020-06-01T10:45:39.351628+02:00",
    "custom_due_date": null,
    "due_date": "2020-08-01",
    "start_date": null,
    "duration": 14,
    "duration_unit": "days",
    "members": [],
    "groups": [],
    "archived": false,
    "public": true,
    "tags": [],
    "project": 24,
    "milestone": 5,
    "content_type": null,
    "object_id": null,
    "parent": null,
    "orders": [],
    "deliverables": [
      2
    ],
    "dependencies": [],
    "timeline_data": {
      "orders": [],
      "objects": [],
      "duration": 2,
      "end_time": 2,
      "delay_time": 0,
      "start_time": 0,
      "deliverables": [
        "171-5"
      ],
      "dependencies": [],
      "missing_time": 0,
      "timeline_unit": "weeks",
      "future_objects": [
        "171-5",
        "171-4",
        "171-8",
        "21-2956",
        "171-112",
        "171-9",
        "36-3040",
        "171-7",
        "171-6"
      ],
      "pre_req_objects": []
    },
    "contenttype": 177,
    "created_by": 1,
    "updated_by": null,
    "created": "2020-05-19T12:48:44.471553+02:00",
    "updated": "2020-06-01T10:45:39.351611+02:00"
  },
  {
    "id": 175,
    "title": "Customer Requirement Specification",
    "description": null,
    "status": 1,
    "status_display": "To do",
    "status_change_date": "2022-03-14T19:55:38.111459+01:00",
    "custom_due_date": "2022-03-18",
    "due_date": "2022-03-18",
    "start_date": "2022-03-17",
    "duration": 1,
    "duration_unit": "days",
    "members": [],
    "groups": [],
    "archived": false,
    "public": true,
    "tags": [],
    "project": 24,
    "milestone": null,
    "content_type": null,
    "object_id": null,
    "parent": null,
    "orders": [],
    "deliverables": [],
    "dependencies": [],
    "timeline_data": {
      "orders": [],
      "objects": [],
      "duration": 0.1,
      "end_time": 93.4,
      "delay_time": 0,
      "start_time": 93.3,
      "deliverables": [],
      "dependencies": [],
      "missing_time": 0,
      "timeline_unit": "weeks",
      "future_objects": [],
      "pre_req_objects": []
    },
    "contenttype": 177,
    "created_by": 96,
    "updated_by": 96,
    "created": "2022-03-14T19:52:09.729453+01:00",
    "updated": "2022-03-14T19:55:38.111443+01:00"
  },
  {
    "id": 37,
    "title": "Mathematical Model Description",
    "description": null,
    "status": 1,
    "status_display": "To do",
    "status_change_date": "2020-06-01T10:43:32.662097+02:00",
    "custom_due_date": null,
    "due_date": "2020-09-01",
    "start_date": null,
    "duration": 20,
    "duration_unit": "days",
    "members": [],
    "groups": [],
    "archived": false,
    "public": true,
    "tags": [],
    "project": 24,
    "milestone": 7,
    "content_type": null,
    "object_id": null,
    "parent": null,
    "orders": [],
    "deliverables": [],
    "dependencies": [
      28,
      9
    ],
    "timeline_data": {
      "orders": [],
      "objects": [],
      "duration": 2.9,
      "end_time": 25.3,
      "delay_time": 0,
      "start_time": 22.4,
      "deliverables": [],
      "dependencies": [
        9,
        28
      ],
      "missing_time": 12.3,
      "timeline_unit": "weeks",
      "future_objects": [],
      "pre_req_objects": [
        "171-5",
        "36-3040",
        "171-4",
        "171-2",
        "21-2956",
        "171-6"
      ]
    },
    "contenttype": 177,
    "created_by": 1,
    "updated_by": null,
    "created": "2020-05-21T17:57:02.822345+02:00",
    "updated": "2020-06-01T10:43:32.662080+02:00"
  },
  {
    "id": 24,
    "title": "Interface Requirements",
    "description": "ECSS-E-ST-10",
    "status": 1,
    "status_display": "To do",
    "status_change_date": "2020-09-15T13:16:34.792892+02:00",
    "custom_due_date": null,
    "due_date": "2020-08-29",
    "start_date": null,
    "duration": 19,
    "duration_unit": "days",
    "members": [],
    "groups": [],
    "archived": false,
    "public": true,
    "tags": [],
    "project": 24,
    "milestone": 11,
    "content_type": null,
    "object_id": null,
    "parent": null,
    "orders": [
      6,
      77
    ],
    "deliverables": [
      32
    ],
    "dependencies": [
      8
    ],
    "timeline_data": {
      "orders": [
        "171-6",
        "36-3040"
      ],
      "objects": [],
      "duration": 2.7,
      "end_time": 8.9,
      "delay_time": 0,
      "start_time": 6.1,
      "deliverables": [
        "21-2956"
      ],
      "dependencies": [
        8,
        14
      ],
      "missing_time": 0,
      "timeline_unit": "weeks",
      "future_objects": [
        "21-2956"
      ],
      "pre_req_objects": [
        "171-5",
        "36-3040",
        "171-6"
      ]
    },
    "contenttype": 177,
    "created_by": 1,
    "updated_by": null,
    "created": "2020-05-21T17:26:52.814511+02:00",
    "updated": "2020-09-15T13:16:34.792870+02:00"
  },
  {
    "id": 25,
    "title": "Technology Plan",
    "description": "ECSS-E-ST-10",
    "status": 1,
    "status_display": "To do",
    "status_change_date": "2020-06-01T10:40:06.184755+02:00",
    "custom_due_date": null,
    "due_date": "2020-08-29",
    "start_date": null,
    "duration": 15,
    "duration_unit": "days",
    "members": [],
    "groups": [],
    "archived": false,
    "public": true,
    "tags": [],
    "project": 24,
    "milestone": 11,
    "content_type": null,
    "object_id": null,
    "parent": null,
    "orders": [],
    "deliverables": [],
    "dependencies": [
      23
    ],
    "timeline_data": {
      "orders": [],
      "objects": [],
      "duration": 2.1,
      "end_time": 9.9,
      "delay_time": 0,
      "start_time": 7.7,
      "deliverables": [],
      "dependencies": [
        23
      ],
      "missing_time": 0,
      "timeline_unit": "weeks",
      "future_objects": [],
      "pre_req_objects": [
        "171-5"
      ]
    },
    "contenttype": 177,
    "created_by": 1,
    "updated_by": null,
    "created": "2020-05-21T17:32:33.057822+02:00",
    "updated": "2020-06-01T10:40:06.184739+02:00"
  }
];

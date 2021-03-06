define({ "api": [
  {
    "deprecated": true,
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "D:/API_Doc/ApiDoc_Example04.js",
    "group": "D:\\API_Doc\\ApiDoc_Example04.js",
    "groupTitle": "D:\\API_Doc\\ApiDoc_Example04.js",
    "name": ""
  },
  {
    "deprecated": {
      "content": "use now (#Group:Name) Example: To set a link to the GetDetails method of your group User write (#User:GetDetails)"
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "D:/API_Doc/ApiDoc_Example04.js",
    "group": "D:\\API_Doc\\ApiDoc_Example04.js",
    "groupTitle": "D:\\API_Doc\\ApiDoc_Example04.js",
    "name": ""
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "D:/API_Doc/Output_APIDoc02/main.js",
    "group": "D:\\API_Doc\\Output_APIDoc02\\main.js",
    "groupTitle": "D:\\API_Doc\\Output_APIDoc02\\main.js",
    "name": ""
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "D:/API_Doc/Output_APIDoc03/main.js",
    "group": "D:\\API_Doc\\Output_APIDoc03\\main.js",
    "groupTitle": "D:\\API_Doc\\Output_APIDoc03\\main.js",
    "name": ""
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "D:/API_Doc/Output_APIDoc04/main.js",
    "group": "D:\\API_Doc\\Output_APIDoc04\\main.js",
    "groupTitle": "D:\\API_Doc\\Output_APIDoc04\\main.js",
    "name": ""
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "D:/API_Doc/Output_APIDoc/main.js",
    "group": "D:\\API_Doc\\Output_APIDoc\\main.js",
    "groupTitle": "D:\\API_Doc\\Output_APIDoc\\main.js",
    "name": ""
  },
  {
    "type": "get",
    "url": "/user/:id",
    "title": "",
    "version": "1.2.1",
    "name": "GetUser",
    "group": "User1",
    "header": {
      "fields": {
        "MyHeaderGroup": [
          {
            "group": "MyHeaderGroup",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authorization value</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\"Content\": \"This is an example content\"}",
          "type": "json"
        }
      ]
    },
    "description": "<p>This is the Description\t\t It is multiple capable</p> <p>Last line of Description.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "size": "100-999",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\"id\":4711\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "300": [
          {
            "group": "300",
            "type": "String",
            "optional": false,
            "field": "Page1",
            "description": "<p>Redirect to page 1</p>"
          },
          {
            "group": "300",
            "type": "String",
            "optional": false,
            "field": "Page2",
            "description": "<p>Redirect to page 2</p>"
          }
        ],
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "active",
            "description": "<p>Specify if the account is active.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "profile",
            "description": "<p>User profile information</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "profile.age",
            "description": "<p>Users age</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "profile.image",
            "description": "<p>Avatar-Image.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "profiles",
            "description": "<p>List of user profiles</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "profiles.age",
            "description": "<p>Users age.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "profiles.image",
            "description": "<p>Avatar-Image.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:\t\t",
          "content": "http/1.1 200 OK\n{\n\t\"content\": \"This is an example content\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "D:/API_Doc/ApiDoc_Example04.js",
    "groupTitle": "User1",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The <code> id </code> of the user was not found.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/user/",
    "title": "",
    "version": "1.2.2",
    "name": "PostUser",
    "group": "User1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "firstname",
            "description": "<p>Optional first name of user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "...5",
            "allowedValues": [
              "\"small\"",
              "\"huge\""
            ],
            "optional": false,
            "field": "lastname",
            "description": "<p>Mandatory Lastname</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "2...5",
            "optional": false,
            "field": "country",
            "defaultValue": "DE",
            "description": "<p>mandatory with default value &quot;DE&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "1",
              "2",
              "18",
              "19",
              "20"
            ],
            "optional": true,
            "field": "age",
            "defaultValue": "18",
            "description": "<p>Optinal age with default 18</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "address",
            "description": "<p>Optional nested address object.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "address[Street]",
            "description": "<p>Optional street and number.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "address[zip]",
            "description": "<p>Optional zip code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "address[city]",
            "description": "<p>Optional city.</p>"
          }
        ],
        "Login": [
          {
            "group": "Login",
            "optional": false,
            "field": "Only",
            "description": "<p>logged in users can post this. In generated documentation a separate &quot;Login&quot; Block will be generated.</p>"
          }
        ]
      }
    },
    "filename": "D:/API_Doc/ApiDoc_Example04.js",
    "groupTitle": "User1",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "MiddleName",
            "description": "<p>The users middle name</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "age",
            "description": "<p>The users age</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/user/:id",
    "title": "Get User Information and Date of Registration",
    "version": "0.2.0",
    "name": "GetUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "registered",
            "description": "<p>Date of Registration</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "http/1.1 200 OK\n{\n\t\"firstname\": \"John\",\n\t\"lastname\": \"Doe\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "http/1.1 404 Not Found\n{\t\n\t\"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "D:/API_Doc/ApiDoc_Example03.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/:id",
    "title": "Get User information",
    "version": "0.1.0",
    "name": "GetUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"firstname\": \"John\",\n  \"lastname\": \"Doe\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The <code>id</code> of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "D:/API_Doc/ApiDoc_History03.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/:id",
    "title": "Request user information",
    "name": "GetUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "http/1.1 200 OK\n{\n\t\"firstname\": \"John\"\n\t\"lastname\": \"Doe\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "http/1.1 404 Not Found\t\n{\n\t\"error\": UserNotFound\n\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "D:/API_Doc/Example_ApiDoc.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/:id",
    "title": "Get User information",
    "name": "GetUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"firstname\": \"John\",\n  \"lastname\": \"Doe\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "D:/API_Doc/Params_APIDoc02/ApiDoc_Example02.js",
    "groupTitle": "User",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The <code>id</code> of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/user/",
    "title": "Modify User information",
    "name": "PutUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "D:/API_Doc/Params_APIDoc02/ApiDoc_Example02.js",
    "groupTitle": "User",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The <code>id</code> of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    }
  }
] });

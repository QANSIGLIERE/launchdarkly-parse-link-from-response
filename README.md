# Launchdarkly Parse Link From Response

The main idea of ​​this library created in the JavaScript language is to parse data from server response and define next link for upload. It can be used for LaunchDarkly API integrations

## Author

https://www.youtube.com/@QANSIGLIERE/

## Support the project

https://buymeacoffee.com/qansigliere

## Installation

Using npm `npm i qansigliere-launchdarkly-parse-link-from-response`

## How to use it

In case if You work with LaunchDarkly, You need to extract a link key value from response to upload
all available data. This library can help You with it. How it works:

```
var { linkParser } = require('qansigliere-launchdarkly-parse-link-from-response');

let response = {
        "_links":{
        "last":{
        "href":"/api/v2/projects/qansigliere/environments?limit=1&offset=1",
        "type":"application/json"
        },
        "next":{
        "href":"/api/v2/projects/qansigliere/environments?limit=1&offset=1",
        "type":"application/json"
        },
        "parent":{
        "href":"/api/v2/projects/qansigliere",
        "type":"application/json"
        },
        "self":{
        "href":"/api/v2/projects/qansigliere/environments?limit=1",
        "type":"application/json"
        }
        },
        "totalCount":2,
        ...
    };

    console.log(linkParser(headers));
```

You will get such simple response:

```
{
    next: '/api/v2/projects/qansigliere/environments?limit=1&offset=1',
    last: '/api/v2/projects/qansigliere/environments?limit=1&offset=1',
    parent: '/api/v2/projects/qansigliere',
    self: '/api/v2/projects/qansigliere/environments?limit=1'
}
```

## Improvements & Suggestions

https://forms.gle/GZbS9hw42tSYJxKL7

## Related Videos

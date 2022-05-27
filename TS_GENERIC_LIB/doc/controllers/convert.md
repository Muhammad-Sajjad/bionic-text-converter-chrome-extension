# Convert

```ts
const convertController = new ConvertController(client);
```

## Class Name

`ConvertController`


# Convert

```ts
async convert(
  content: string,
  responseType: string,
  requestType: string,
  fixation: number,
  saccade: number,
  contentType: string,
  useQueryString: boolean,
  xRapidapiHost: string,
  xRapidapiKey: string,
  xRapidapiUa: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `content` | `string` | Form, Required | - |
| `responseType` | `string` | Form, Required | - |
| `requestType` | `string` | Form, Required | - |
| `fixation` | `number` | Form, Required | - |
| `saccade` | `number` | Form, Required | - |
| `contentType` | `string` | Header, Required | - |
| `useQueryString` | `boolean` | Header, Required | - |
| `xRapidapiHost` | `string` | Header, Required | - |
| `xRapidapiKey` | `string` | Header, Required | - |
| `xRapidapiUa` | `string` | Header, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const content = 'hello world';
const responseType = 'html';
const requestType = 'html';
const fixation = 1;
const saccade = 10;
const contentType = 'application/x-www-form-urlencoded';
const useQueryString = false;
const xRapidapiHost = 'bionic-reading1.p.rapidapi.com';
const xRapidapiKey = '1a63cb2e32msh41c361fa818a5b7p16af51jsna5a71c9ef4a8';
const xRapidapiUa = 'RapidAPI-Playground';
try {
  const { result, ...httpResponse } = await convertController.convert(content, responseType, requestType, fixation, saccade, contentType, useQueryString, xRapidapiHost, xRapidapiKey, xRapidapiUa);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Convert

```ts
const convertController = new ConvertController(client);
```

## Class Name

`ConvertController`


# Convert

convert

```ts
async convert(
  useQueryString: boolean,
  xRapidapiHost: string,
  xRapidapiKey: string,
  xRapidapiUa: string,
  content: string,
  responseType: string,
  requestType: string,
  fixation: number,
  saccade: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<string>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `useQueryString` | `boolean` | Header, Required | - |
| `xRapidapiHost` | `string` | Header, Required | - |
| `xRapidapiKey` | `string` | Header, Required | - |
| `xRapidapiUa` | `string` | Header, Required | - |
| `content` | `string` | Form, Required | - |
| `responseType` | `string` | Form, Required | - |
| `requestType` | `string` | Form, Required | - |
| `fixation` | `number` | Form, Required | - |
| `saccade` | `number` | Form, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`string`

## Example Usage

```ts
const contentType = null;
const useQueryString = false;
const xRapidapiHost = 'bionic-reading1.p.rapidapi.com';
const xRapidapiKey = '1a63cb2e32msh41c361fa818a5b7p16af51jsna5a71c9ef4a8';
const xRapidapiUa = 'RapidAPI-Playground';
const content = 'hello world';
const responseType = 'html';
const requestType = 'html';
const fixation = 1;
const saccade = 10;
try {
  const { result, ...httpResponse } = await convertController.convert(useQueryString, xRapidapiHost, xRapidapiKey, xRapidapiUa, content, responseType, requestType, fixation, saccade);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


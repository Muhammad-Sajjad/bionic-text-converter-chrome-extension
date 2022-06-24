
# Bionic-Text Converter Chrome Extension

This project is a google chrome extension that uses [Bionic Reading](https://bionic-reading.com/) API and it's SDK to convert the text on a page into bionic text.

## Documentation on Bionic-Reading API

Here is the [documentation portal](
https://www.apimatic.io/apidocs/bionic-reading/v/1_0#/typescript/step-by-step-tutorial) for the Bionic Reading API, auto-generated using [APIMatic](https://www.apimatic.io/). This Portal contains SDKs in 6 different programming languages along with idiomatic code samples:


## API Key

This App requires an API Key to interact with the Bionic Reading API.
You can get your own API Key to use this App by signing up [here](https://rapidapi.com/bionic-reading-bionic-reading-default/api/bionic-reading1/).

## Build

In order to build this project:

1. Install all the dependencies 

```bash
  npm install
```
This will also install the TS SDK for Bionic-reading API.

2. Build

```bash
  npm run build
```

This will transpile all the code changes you make in source code (inside src folder) into javascript code inside dist folder.

## Deployment

To deploy this project locally:
1. To run the extension in developer mode, Click on 'Load Unpacked Extension' from chrome and point to the `dist` folder.

2. [Optional] To start a live development server
```bash
  npm run dev
```
This will keep your extension up to date without having to rebuild the project after every code change.



## License

[MIT](https://choosealicense.com/licenses/mit/)



If you can improve anything in this repo, feel free to add a pull request.

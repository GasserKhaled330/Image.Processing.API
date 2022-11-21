# Image Processing API - Udacity Fullstack JS Nanodegree

## Introduction

This is a simple REST API allowing users to create, access and resize placeholder images using the [Sharp](https://sharp.pixelplumbing.com/) Node.js image processing module.

---

## Getting Started

### Installing dependencies

After cloning the repo, all the project dependencies can be installed using npm:

```
npm install
```

### Scripts

The following actions can be executed through npm scripts:

#### Transpiling typescript to javascript

```
npm run build
```
![running example](https://github.com/GasserKhaled330/Image.Processing.API/blob/main/screenshoots/run%20bulid.png)
The transpiled code will be available in the `build` folder.

#### Testing And Transpiling typescript to javascript

A jasmine testing suite can be used to validate the endpoint as well as the imageTransform functionality.

```
npm run test
```
![running test and build example](https://github.com/GasserKhaled330/Image.Processing.API/blob/main/screenshoots/tests%20run.png)
#### Formatting

The code can be automatically formatted using prettier. The formatting options can be customised by editin the `.prettierrc`file.

```
npm run prettier
```

#### Linting

The code can ba automatically linted using ESlint. Note that ESlint will also use prettier to test for incorrect formatting. Rules, plugins and extensions for ESlint can be modified through the `.eslintrc` file.

```
npm run lint
```
![running example](https://github.com/GasserKhaled330/Image.Processing.API/blob/main/screenshoots/run%20lint.png)
### Running the server

To execute the application use the following command in terminal:

```
npm run start
```
![running example](https://github.com/GasserKhaled330/Image.Processing.API/blob/main/screenshoots/run%20start%20.png)
the app will then be available on port 3000 by default, but that can be changed by editing the port constant value in the app.ts file.

---

## How to use

The API offers one endpoint to access and resize images available in the `public/images` folder.

The endpoint is `api/images` and requires three query params:

| Query Param |                                     Value                                     |
| ----------- | :---------------------------------------------------------------------------: |
| filename    | the filename (without extension) of one of the images available in the folder |
| height      |                        it should be a positive integer                        |
| width       |                        it should be a positive integer                        |

Note that a preview of all the available images and their filenames can be accessed using the main API endpoint. Assuming the app is running on port 3000 that would be:

[http://localhost:3000/api](http://localhost:3000/api)
![running example](https://github.com/GasserKhaled330/Image.Processing.API/blob/main/screenshoots/home%20page.png)
An example of a correct endpoint call would be:

[http://localhost:3000/api/images?filename=fjord&height=100&width=200](http://localhost:3000/api/images?filename=fjord&height=100&width=200)
![running example](https://github.com/GasserKhaled330/Image.Processing.API/blob/main/screenshoots/result.png)

# Installation
For this demo I used an example in the Launch Darkly React SDK TypeScript example as a starting point. The following steps will get the demo app up and running.

**Run the following commands to get started**
```sh 
git clone https://github.com/spicecadet/Launch-Darkly-Demo.git
cd react-client-sdk/examples/typescript
```
- Create a file called .env.local
- Add REACT_APP_LD_CLIENT_SIDE_ID=xxx
- Change the xxx to your ClientSideID
```sh
yarn && yarn start
```

## Add Feature Flags to Launch Darkly
You will need three feature flags to show the capabilities of this demo. Create the following Kill Switch flags in your Launch Darkly project

### dev-test-flag - Boolean Flag
This flag changes the react logo to a Launch Darkly logo
- Create a Kill Switch Flag and name it dev-test-flag
- Hit next and make sure Boolean is selected in the Flag variations options
- For the first variation use the following values: Name: Enabled, Value: True
- For the second variation use the following values: Name: Disabled, Value: False

Under Default Variations
- Set On to Enabled
- Set Off to Disabled

Under Advanced Configuration  make sure SDKs using Client-side ID is clicked
- Click Create flag

### bottom-text-flag - String Flag
This Flag updates the text on the botton of the page
- Create a Kill Switch Flag and name it bottom-text-flag
- Hit next and make sure String is selected in the Flag variations options
- For the first variation use the following values: Value: Introduction to Feature Flags , Name: Old
- For the second variation use the following values: Value: Feature Flags FTW 😁!, Name: New

Under Default Variations
- Set On to New
- Set Off to Old

Under Advanced Configuration  make sure SDKs using Client-side ID is clicked
- Click Create flag

### test-flag - Multivariate Flag
This flag creates an experiment flag on the top of the page
- Create an Experiment Flag and name it test-flag
- Hit next and make sure String is selected in the Flag variations options
- For the first variation use the following: Value: Welcome!
- For the second variation use the following: Value: Welcome to my demo site!
- For the third variation use the following: Value: Welcome to the demo Test User 1!

Under Default Variations
- Set On to Treatment 1
- Set Off to Treatment 2

Under Advanced Configuration  make sure SDKs using Client-side ID is clicked
- Click Create flag

### Note: 
in order to test Treatment 3 you will need to create a new Segment. Add user test-user-1 as an Included Target and save changes.

# LaunchDarkly SDK for React - Example typescript app

This is a CRA typescript app demonstrating `launchdarkly-react-client-sdk`.

## Running the typescript example

Follow these steps to run the app:

* Create a `.env.local` file and set your clientSideID there like so:

    ```shell
    REACT_APP_LD_CLIENT_SIDE_ID=xxx
    ```

* Create a flag called `dev-test-flag` in your project. Make sure you
  make the flag available to the client-side SDK.

* You should now be able to start the app by doing:

    ```sh
    yarn && yarn start
    ```

* Toggle the killswitch for `dev-test-flag` in the dashboard and the
  app should respond without a browser refresh.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

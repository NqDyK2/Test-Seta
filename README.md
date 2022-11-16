# Getting Started with Create React App and Redux

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Javascript algorithm
 - Questions:

1. Provide an array of strings, eg: [‘a’, ‘ab’, ‘abc’, ‘cd’, ‘def, ‘gh’]. Write a function to
find the strings’ length that appear most in this array. Writing the unit test function
and provide some test-cases. The result for example array is [‘ab’, ‘cd’, ‘gh’].

2. Provide an array of integers, eg: [1, 4, 2, 3, 5]. Write a function to find sum of
integers on top 2. Writing the unit test function and provide some test-cases. The
result for the example array is 9.

 - Answers: 

1. function maxLengthApperance(input) {
    const map = new Map();
    for(let i = 0; i < input.length; i++) {
        if(map.get(input[i].length) == undefined) {
            map.set(input[i].length, 1)
        } else {
            map.set(input[i].length, map.get(input[i].length) + 1);
        }
    }
    let [key, value] = [...map.entries()].reduce((a, e ) => e[1] > a[1] ? e : a)
    let result = input.filter(item=> item.length == key)
    return result;
}

console.log(maxLengthApperance(['a', 'ab', 'abc', 'cd', 'def', 'gh']))

2. function sumOfTop(array, top) {
    if(top > array.length || top <= 0) {
        throw "Invalid top"
    }
    array.sort()
    // JS array sort O(n log n)
    let sum = 0;
    for(let i = array.length - 1; i >= array.length - top; i--) {
        sum += array[i];
    }
    // O(n - top) => O(n) complexity
    return sum;
}

console.log(sumOfTop([1, 4, 5, 2 ,3], 2))

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).




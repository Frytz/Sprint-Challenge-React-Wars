# Answers

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.
React Js is an front-end library built by the team in facebook that enables the building of views by the use of reusable components while handling changes in state of the virtual dom.

1. Describe component state.
    It's an object that determines how a component renders & behaves
1. Describe props.
    props are a state that allows for properties to be passed from one component to another

1. What are side effects, and how do you sync effects in a React component to changes of certain state or props?

Side effects are  anything that affects something outside of the scope of the current function that's being executed and you sync their effects using the Effect Hook {useEffect} that takes 2 arguments. The first argument is a function and the 2nd argument is a dependency array
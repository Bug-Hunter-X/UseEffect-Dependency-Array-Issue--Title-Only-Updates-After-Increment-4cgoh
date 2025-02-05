# React useEffect Dependency Array Issue

This example demonstrates a common mistake when using the `useEffect` hook in React. The dependency array only includes the `count` state variable. This means that the effect only runs when the value of `count` changes.  However, it is not running when the component initially mounts.  This results in the document title not being updated until after the counter is incremented.

The solution shows how to correctly include the empty dependency array `[]` to run the effect only on mount, or include other required dependencies for correct updates.
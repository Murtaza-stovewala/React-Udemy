So this ref value you are getting back from useRef

will always, really always be a JavaScript object

that will always have a current property

and only a current property.

And it's then in this current property

that the actual ref value,


# React Refs ## 1. What are Refs? A **ref (reference)** is a special value managed by React. Just like: - A variable stores a value- State stores a value managed by React- A ref also stores a value managed by React But refs are special because they can be **connected to DOM elements** and allow us to access those elements directly. Refs are created using React's built-in `useRef()` hook. ```jsxconst inputRef = React.useRef();

> 
> The name of the ref can be anything. `inputRef`, `playerName`, `nameInput`, etc. are all valid names.

* * *

# 2. Creating a Ref

Refs are created with:

    const inputRef = React.useRef();

`useRef()` returns a JavaScript object.

The object has a `current` property:

    { current: ...}

Initially, when no element is connected:

    inputRef.current

will generally be `null`/empty.

After React connects the ref to a DOM element, `current` contains that element.

* * *

# 3. Connecting a Ref to a DOM Element

A ref can be connected to a JSX element using the special `ref` prop.

    const inputRef = React.useRef(); <input ref={inputRef} />

Now React connects:

    inputRef ↓current ↓<input> DOM element

Therefore, the actual DOM element can be accessed through:

    inputRef.current

* * *

# 4. Why Do We Need `.current`?

A ref created with `useRef()` is always an object.

For example:

    const inputRef = React.useRef();

You don't directly get the input element:

    inputRef

Instead, the element is stored inside:

    inputRef.current

So:

    inputRef.current

refers to the actual connected `<input>` element.

* * *

# 5. Accessing the DOM Element Through a Ref

Once a ref is connected:

    <input ref={inputRef} />

we can access the native DOM input element:

    inputRef.current

Since `current` contains the actual HTML element, we can use the properties and methods provided by that element.

For example:

    inputRef.current.value

gets the current value entered into the input.

* * *

# 6. Example: Reading an Input Value

Suppose we have:

    const playerName = React.useRef(); <input ref={playerName} />

When the user enters:

    Max

we can read it using:

    playerName.current.value

which gives:

    "Max"

* * *

# 7. Refs Can Be Used in Event Handlers

A common use case is reading a value when a button is clicked.

    const playerName = React.useRef(); function handleClick() { console.log(playerName.current.value);}

And:

    <input ref={playerName} /> <button onClick={handleClick}> Set Name</button>

The flow is:

    User types "Max" ↓Input DOM element contains "Max" ↓User clicks button ↓handleClick() ↓playerName.current ↓input element ↓.value ↓"Max"

* * *

# 8. Refs vs State

This is one of the most important things to understand.

## Using State

With state, we normally listen to every change:

    const [enteredName, setEnteredName] = React.useState(''); function handleChange(event) { setEnteredName(event.target.value);}

    <input value={enteredName} onChange={handleChange}/>

Every keystroke updates state.

    M ↓state update ↓re-render Ma ↓state update ↓re-render Max ↓state update ↓re-render

* * *

# 9. Using a Ref

With a ref:

    const playerName = React.useRef(); <input ref={playerName} />

we don't need an `onChange` handler just to read the value later.

The input keeps its own value.

When we need it:

    function handleClick() { const name = playerName.current.value;}

The flow becomes:

    User types ↓Input keeps its value ↓No state update required ↓User clicks button ↓Read inputRef.current.value

This can make a component **simpler and leaner** when you only need to read an input value at a particular point.

* * *

# 10. Example: Ref-Based Input

    import React from 'react'; function App() { const playerName = React.useRef(); const [enteredPlayerName, setEnteredPlayerName] = React.useState(''); function handleClick() { setEnteredPlayerName(playerName.current.value); } return ( <> <input ref={playerName} /> <button onClick={handleClick}> Set Name </button> <p> {enteredPlayerName || 'Unknown Entity'} </p> </> );}

Here:

- `playerName` → ref
- `playerName.current` → actual input element
- `playerName.current.value` → entered value
- `enteredPlayerName` → state used to display the result

* * *

# 11. `||` and `??` for Displaying Fallback Values

A common pattern is:

    {enteredPlayerName || 'Unknown Entity'}

This means:

    If enteredPlayerName has a truthy value ↓display it Otherwise ↓display "Unknown Entity"

For example:

    enteredPlayerName = "Max"

outputs:

    Max

But:

    enteredPlayerName = ""

outputs:

    Unknown Entity

The transcript also introduces the `??` operator:

    {enteredPlayerName ?? 'Unknown Entity'}

The important distinction is:

    || → checks for falsy values?? → checks specifically for null/undefined

* * *

# 12. Why Use a Ref Instead of State?

Refs can be useful when:

> 
> You simply need to access a DOM element or read a value from it without needing React to track every change.

For example:

    Input field ↓User types ↓No need to update React state ↓Button clicked ↓Read value using ref

This can reduce unnecessary code in situations where the input value doesn't need to control the UI on every keystroke.

* * *

# 13. Refs Can Also Access DOM Methods

A ref doesn't only give access to values.

It gives access to the actual DOM element, so you can use its available methods too.

For example:

    inputRef.current.focus();

can focus an input.

For a file input:

    fileInputRef.current.click();

can trigger its native click behavior.

For a dialog:

    dialogRef.current.showModal();

can open the dialog.

So:

    ref.current ↓actual DOM element ↓properties + methods

* * *

# 14. Example: Triggering a Hidden File Input

    const fileInput = React.useRef(); function handleClick() { fileInput.current.click();} return ( <> <input ref={fileInput} type="file" style={{ display: 'none' }} /> <button onClick={handleClick}> Pick Image </button> </>);

The flow:

    Pick Image button ↓handleClick() ↓fileInput.current ↓hidden <input> ↓.click() ↓Native file picker opens

* * *

# 15. Refs and Custom Components

A ref works directly with DOM elements:

    <input ref={inputRef} />

But things become different when the input is hidden inside a **custom component**.

For example:

    <Input ref={inputRef} />

where:

    App ↓<Input /> ↓<input />

The parent wants the ref to ultimately reach the actual `<input>`.

This is where **ref forwarding** becomes useful.

* * *

# 16. `forwardRef`

`forwardRef` allows a custom component to receive a ref and pass it to an inner element.

Example:

    const Input = React.forwardRef(function Input(props, ref) { return <input ref={ref} />;});

Now:

    const inputRef = React.useRef(); <Input ref={inputRef} />

can connect the ref to the actual input inside the custom component.

The flow becomes:

    App ↓ref ↓Input component ↓forwardRef ↓<input>

* * *

# 17. Forwarding Other Props

A reusable custom input should also be able to accept normal input attributes.

For example:

    <Input type="email" placeholder="Enter email" ref={emailRef}/>

Inside the component:

    const Input = React.forwardRef(function Input( { label, ...otherProps }, ref) { return ( <> <label>{label}</label> <input ref={ref} {...otherProps} /> </> );});

Here:

    label ↓used by <label> otherProps ↓forwarded to <input> ref ↓forwarded to <input>

* * *

# 18. `useImperativeHandle`

Sometimes forwarding the actual DOM element isn't the best design.

For example, suppose:

    TimerChallenge ↓ResultModal ↓<dialog>

If `TimerChallenge` gets direct access to the `<dialog>`, it might do:

    dialog.current.showModal();

Now `TimerChallenge` knows that `ResultModal` internally uses a `<dialog>`.

That creates a dependency on the internal implementation.

* * *

# 19. The Problem with Direct DOM Access Through a Component

Imagine another developer changes:

    <dialog>

to:

    <div>

Now this:

    dialog.current.showModal();

doesn't work.

The parent component shouldn't need to know how `ResultModal` is implemented internally.

Instead, `ResultModal` can expose its own method:

    TimerChallenge ↓ResultModal ↓open() ↓internal implementation

<head></head>
# `useImperativeHandle` — Exposing Custom Methods from Components

## 1. The Problem with Directly Forwarding a Ref

Suppose `TimerChallenge` uses a `ResultModal` component:

    TimerChallenge ↓ ResultModal ↓ <dialog>

If the ref from `TimerChallenge` is directly forwarded to the internal `<dialog>` element, then `TimerChallenge` needs to know **how `ResultModal` is implemented internally**.

For example, it might do:

    dialog.current.showModal();

### Why can this be a problem?

The parent component becomes dependent on the internal implementation of `ResultModal`.

For example, today `ResultModal` might use:

    <dialog>

and therefore:

    dialog.current.showModal();

works.

But another developer could later change the implementation to:

    <div>

Now:

    dialog.current.showModal();

would no longer work.

So the parent component is tightly coupled to the internal implementation of `ResultModal`.

* * *

# 2. Better Approach: Expose Your Own Method

Instead of exposing the internal `<dialog>` element, `ResultModal` can expose its **own function**.

For example:

    TimerChallenge ↓ ResultModal ↓ exposes → open()

The parent doesn't need to know whether `ResultModal` internally uses:

- `<dialog>`
- `<div>`
- something else

The parent only needs to know:

> 
> `ResultModal` provides an `open()` method.

This makes the component more stable and reusable.

* * *

# 3. `useImperativeHandle`

React provides the:

    useImperativeHandle

hook for this purpose.

It allows a component to define:

> 
> Which properties and methods should be accessible from outside the component through a ref.

* * *

# 4. Arguments of `useImperativeHandle`

`useImperativeHandle` receives **two main arguments**.

    useImperativeHandle(ref, function);

### First argument — `ref`

The first argument is the ref that is passed to the component.

When using `forwardRef`, this is the `ref` received as the second parameter:

    const ResultModal = forwardRef(function ResultModal(props, ref) {

So:

    useImperativeHandle(ref, ...)

uses that forwarded ref.

> 
> In React versions where `forwardRef` isn't needed, the `ref` can instead be received as a regular prop.

* * *

# 5. Second Argument — Function Returning an Object

The second argument is a function.

That function returns an object containing the **properties and methods that should be exposed**.

For example:

    useImperativeHandle(ref, () => { return { open() { // ... } };});

Here, `open` becomes a method that can be called from outside the component.

* * *

# 6. Why We Need Another Ref

Previously, the outside component could directly access the internal `<dialog>`.

With `useImperativeHandle`, we want to **detach the outside component from the internal dialog element**.

Therefore, `ResultModal` needs its own internal ref:

    const dialog = useRef();

Then that ref is attached to the actual `<dialog>`:

    <dialog ref={dialog}>

Now there are effectively two different things:

    Outside ref ↓ ResultModal ↓ exposed object ↓ open() ↓ internal dialog ref ↓ <dialog>

* * *

# 7. What Happens Inside `open()`

The exposed `open()` method can use the internal `dialog` ref:

    open() { dialog.current.showModal();}

So when another component calls:

    dialog.current.open();

the following happens:

    dialog.current.open() ↓ResultModal's open() ↓dialog.current.showModal() ↓<dialog> opens

The parent doesn't know that `showModal()` is being used.

* * *

# 8. `TimerChallenge` Usage

The `TimerChallenge` component still creates a ref:

    const dialog = useRef();

and passes it to `ResultModal`:

    <ResultModal ref={dialog} />

But because of `forwardRef` + `useImperativeHandle`, the ref no longer directly represents the `<dialog>` DOM element.

Instead, it refers to the object exposed by `ResultModal`.

That object contains:

    { open()}

Therefore, `TimerChallenge` can call:

    dialog.current.open();

* * *

# 9. The Important Difference

### Without `useImperativeHandle`

    TimerChallenge ↓ ref ↓ <dialog> ↓showModal()

The parent needs to know about the internal `<dialog>`.

* * *

### With `useImperativeHandle`

    TimerChallenge ↓ ref ↓ ResultModal ↓ open() ↓ internal <dialog> ↓ showModal()

The parent only knows about:

    open()

It doesn't need to know how `ResultModal` works internally.

* * *

# 10. Main Benefit

The important idea from this lesson is:

> 
> **Expose a stable API from a component instead of exposing its internal implementation.**

For example, `ResultModal` promises:

    open()

As long as `ResultModal` continues exposing `open()`, the developer working on `TimerChallenge` doesn't need to care how the modal is implemented internally.

The `ResultModal` developer is free to change the internal implementation, as long as the exposed interface remains:

    open()

* * *

# 11. Complete Concept

     TimerChallenge │ │ ref ↓ ResultModal │ useImperativeHandle │ ↓ { open() } │ ↓ internal dialog ref │ ↓ <dialog> │ ↓ showModal()

* * *

# 12. Important Note

`useImperativeHandle` is **not something you will use very often**.

The transcript emphasizes that in most cases, you should prefer normal React patterns such as:

- props
- state
- declarative rendering

But for situations where a component needs to expose a **callable function through a ref**, `useImperativeHandle` can be useful.

### Core pattern to remember

    useImperativeHandle(ref, () => { return { someMethod() { // component's internal logic } };});

Then the parent can use:

    ref.current.someMethod();

**Memory trick:**

> 
> `forwardRef` → **allows the ref to reach the component**  
> `useImperativeHandle` → **controls what the ref exposes**

Continue with this useImperativeHandle topic


# CV-Application
First simple app made with React.
Most troublesome thing I faced in this project was definitely the State not updating when needed.
In order to solve this I passed in a function instead of an object in the setState: so instead of:

this.setState({
  item: this.state.item + 1 
})

I wrote:

this.setState(()=>({
  item: this.state.item +1
}))

This helped me to render the CV upon the first submit, and not on the second one.

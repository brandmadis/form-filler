import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';


// var t0 = performance.now();
// var t1 = performance.now();
// console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")

class TextboxField extends Component {
  render() {
    let outerFieldStyle = {
        top: this.props.field.yfield, 
        left: this.props.field.xfield,
        zIndex: '100', 
        position: 'absolute',
        color: 'white',
        fontFamily: 'Arial',
        fontWeight: 'bold',
        width: '200px',
        height: '35px',
        borderRadius: '5px',
        resize: 'horizontal',
        overflow: 'auto',
        cursor: 'pointer',
        overflowX: 'hidden',
        overflowY: 'hidden',
    }
    let innerFieldStyle = {
      backgroundColor: '#1CA1C1', 
      margin: '3px',
      borderRadius: '6px',
      paddingLeft: '10px'
    }
    let toolTipStyle = {
        top: this.props.field.yfield + 40, 
        left: this.props.field.xfield,
        height: '150px',
        width: '250px',
        position: 'absolute',
        backgroundColor: 'white',
        zIndex: '1000', 
        padding: '10px',
        fontFamily: 'Arial',
        fontWeight: 'bold',
        borderRadius: '6px',
        transition: 'opacity .75s' ,
        border: '1px solid #1CA1C1'
    }
    let toolTipId = "tooltip" + this.props.i 
    return (
      <div>
      <div
        id={this.props.i}
        style={outerFieldStyle}
        draggable="true"
        onDragStart={(e) => this.props.onDragStart(e)}
        onDrop={(e) => this.props.onDrop(e)}
        onDragOver= {(e) =>this.props.onDragOver(e) }
        onMouseEnter={() =>this.props.onMouseEnter()}
        onMouseLeave={() => this.props.onMouseLeave()}
        >
        <div 
          style={innerFieldStyle}
          onClick={() => this.props.onClick()}>
          {this.props.field.boxType}
        </div>
      </div>
      
        <div 
            className="toolTipOff"
            style={toolTipStyle}
            id={toolTipId}
            >
            <label for="name">Name: </label>
            <input id="name" type="text" name="name"/>
            <label for="required">Required: </label>
            <input id="required" type="checkbox" name="required"/>
            <br />
            <button
              className="btn btn-default"
              onClick={() => this.props.fieldDelete()}
              >  <i class="fas fa-trash-alt"></i></button>            
        </div>
      </div>
      )
  }
}
class SignatureField extends Component {
  render() {
    let outerFieldStyle = {
        top: this.props.field.yfield, 
        left: this.props.field.xfield,
        zIndex: '100', 
        position: 'absolute',
        color: 'white',
        fontFamily: 'Arial',
        fontWeight: 'bold',
        width: '200px',
        height: '35px',
        borderRadius: '5px',
        resize: 'horizontal',
        overflow: 'auto',
        cursor: 'pointer',
        overflowX: 'hidden',
        overflowY: 'hidden',
    }
    let innerFieldStyle = {
      backgroundColor: '#1CA1C1', 
      margin: '3px',
      borderRadius: '6px',
      paddingLeft: '10px'
    }
    let toolTipStyle = {
        top: this.props.field.yfield + 40, 
        left: this.props.field.xfield,
        height: '150px',
        width: '250px',
        position: 'absolute',
        backgroundColor: 'white',
        zIndex: '1000', 
        padding: '10px',
        fontFamily: 'Arial',
        fontWeight: 'bold',
        borderRadius: '6px',
        transition: 'opacity .75s',  
        border: '1px solid #1CA1C1'
        
    }
    let toolTipId = "tooltip" + this.props.i 
    return (
      <div>
      <div
        id={this.props.i}
        style={outerFieldStyle}
        draggable="true"
        onDragStart={(e) => this.props.onDragStart(e)}
        onDrop={(e) => this.props.onDrop(e)}
        onDragOver= {(e) =>this.props.onDragOver(e) }
        onMouseEnter={() =>this.props.onMouseEnter()}
        onMouseLeave={() => this.props.onMouseLeave()}
        >
        <div 
          style={innerFieldStyle}
          onClick={(e) => this.props.onClick(e)}>
          {this.props.field.boxType}
        </div>
      </div>
      
        <div 
            className="toolTipOff"
            style={toolTipStyle}
            id={toolTipId}
            >
            <label for="name">Name: </label>
            <input id="name" type="text" name="name"/>
            <label for="required">Required: </label>
            <input id="required" type="checkbox" name="required"/>
            <br />
            <button
              className="btn btn-default"
              onClick={() => this.props.fieldDelete()}
              ><i class="fas fa-trash-alt"></i></button>            
        </div>
      </div>
      )
  }
}

class CheckboxField extends Component {
  render() {
    let outerField = {
        top: this.props.field.yfield, 
        left: this.props.field.xfield,
        zIndex: '100', 
        position: 'absolute',
        color: 'white',
        borderRadius: '5px',
        cursor: 'pointer',
    }
    let innerField = {
      
    }
    let toolTipStyle = {
        top: this.props.field.yfield + 40, 
        left: this.props.field.xfield,
        height: '150px',
        width: '250px',
        position: 'absolute',
        backgroundColor: 'white',
        zIndex: '1000', 
        padding: '10px',
        fontFamily: 'Arial',
        fontWeight: 'bold',
        borderRadius: '6px',
        transition: 'opacity .75s',
        border: '1px solid #1CA1C1'
        
    }
    let toolTipId = "tooltip" + this.props.i 
    
    return (
      <div>
      <div
        id={this.props.i}
        style={outerField}
        draggable="true"
        onDragStart={(e) => this.props.onDragStart(e)}
        onDrop={(e) => this.props.onDrop(e)}
        onDragOver= {(e) =>this.props.onDragOver(e) }
        onMouseEnter={() =>this.props.onMouseEnter()}
        onMouseLeave={() => this.props.onMouseLeave()}
        >
        <div
          style={innerField}
          onClick={(e) => this.props.onClick(e)}>
          
          <i style={{color: '#1CA1C1', fontSize: '1.5em'}} className="fas fa-check-square"></i>
        </div>
        </div>
        <div 
            className="toolTipOff"
            style={toolTipStyle}
            id={toolTipId}
            >
            <label for="name">Name: </label>
            <input id="name" type="text" name="name"/>
            <label for="required">Required: </label>
            <input id="required" type="checkbox" name="required"/>
            <br />
            <button
              className="btn btn-default"
              onClick={() => this.props.fieldDelete()}
              ><i class="fas fa-trash-alt"></i></button>            
        </div>
        
      </div>
      )
  }
}
class DatePickerField extends Component {
  render() {
    let outerFieldStyle = {
        top: this.props.field.yfield, 
        left: this.props.field.xfield,
        zIndex: '100', 
        position: 'absolute',
        color: 'white',
        fontFamily: 'Arial',
        fontWeight: 'bold',
        width: '200px',
        height: '35px',
        borderRadius: '5px',
        resize: 'horizontal',
        overflow: 'auto',
        cursor: 'pointer',
        overflowX: 'hidden',
        overflowY: 'hidden',
    }
    let innerFieldStyle = {
      backgroundColor: '#1CA1C1', 
      margin: '3px',
      borderRadius: '6px',
      paddingLeft: '10px'
    }
    let toolTipStyle = {
        top: this.props.field.yfield + 40, 
        left: this.props.field.xfield,
        height: '150px',
        width: '250px',
        position: 'absolute',
        backgroundColor: 'white',
        zIndex: '1000', 
        padding: '10px',
        fontFamily: 'Arial',
        fontWeight: 'bold',
        borderRadius: '6px',
        transition: 'opacity .75s',
        border: '1px solid #1CA1C1'

    }
    let toolTipId = "tooltip" + this.props.i 
    
    return (
      <div>
      <div
        id={this.props.i}
        style={outerFieldStyle}
        draggable="true"
        onDragStart={(e) => this.props.onDragStart(e)}
        onDrop={(e) => this.props.onDrop(e)}
        onDragOver= {(e) =>this.props.onDragOver(e) }
        onMouseEnter={() =>this.props.onMouseEnter()}
        onMouseLeave={() => this.props.onMouseLeave()}
        >
        <div 
          style={innerFieldStyle}
          onClick={(e) => this.props.onClick(e)}>
          {this.props.field.boxType}
        </div>
      </div>
      
        <div 
            className="toolTipOff"
            style={toolTipStyle}
            id={toolTipId}
            >
            <label for="name">Name: </label>
            <input id="name" type="text" name="name"/>
            <label for="required">Required: </label>
            <input id="required" type="checkbox" name="required"/>
            <br />
            <button
              className="btn btn-default"
              onClick={() => this.props.fieldDelete()}
              ><i class="fas fa-trash-alt"></i></button>            
        </div>
      </div>
      )
    }
}
class FormField extends Component {
  render() {
    const boxType = this.props.field.boxType
    console.log("boxType: ", boxType)
    let displayField;
    if (boxType === "Textbox"){
      displayField = 
      <TextboxField 
        key={this.props.key}
        field={this.props.field}
        i={this.props.i}
        showTooltip={() => this.props.showTooltip}
        onDragStart={(e) => this.props.onDragStart(e)}
        onClick={() => this.props.onClick(this.props.i)}
        onDrop={(e) => this.props.onDrop(e)}
        onDragOver={(e) => this.props.onDragOver(e)}  
        onMouseEnter={() => this.props.onMouseEnter(this.props.i)}
        onMouseLeave={() => this.props.onMouseLeave(this.props.i)}  
        onBlur={(e) => this.props.onBlur(e, this.props.i)}
        fieldDelete={() => this.props.fieldDelete(this.props.i)}
      />
    } else if (boxType === "Checkbox"){
      displayField = 
      <CheckboxField 
        key={this.props.key}
        field={this.props.field}
        i={this.props.i}
        showTooltip={() => this.props.showTooltip}
        onDragStart={(e) => this.props.onDragStart(e)}
        onClick={() => this.props.onClick(this.props.i)}
        onDrop={(e) => this.props.onDrop(e)}
        onDragOver={(e) => this.props.onDragOver(e)}  
        onMouseEnter={() => this.props.onMouseEnter(this.props.i)}
        onMouseLeave={() => this.props.onMouseLeave(this.props.i)}  
        onBlur={(e) => this.props.onBlur(e, this.props.i)}
        fieldDelete={() => this.props.fieldDelete(this.props.i)}
      />
    } else if (boxType === "DatePicker"){
      displayField = 
      <DatePickerField 
        key={this.props.key}
        field={this.props.field}
        i={this.props.i}
        showTooltip={() => this.props.showTooltip}
        onDragStart={(e) => this.props.onDragStart(e)}
        onClick={() => this.props.onClick(this.props.i)}
        onDrop={(e) => this.props.onDrop(e)}
        onDragOver={(e) => this.props.onDragOver(e)}  
        onMouseEnter={() => this.props.onMouseEnter(this.props.i)}
        onMouseLeave={() => this.props.onMouseLeave(this.props.i)}  
        onBlur={(e) => this.props.onBlur(e, this.props.i)}
        fieldDelete={() => this.props.fieldDelete(this.props.i)}
      />    
  } else if (boxType === "Signature"){
      displayField = 
      <SignatureField 
        key={this.props.key}
        field={this.props.field}
        i={this.props.i}
        showTooltip={() => this.props.showTooltip}
        onDragStart={(e) => this.props.onDragStart(e)}
        onClick={() => this.props.onClick(this.props.i)}
        onDrop={(e) => this.props.onDrop(e)}
        onDragOver={(e) => this.props.onDragOver(e)}  
        onMouseEnter={() => this.props.onMouseEnter(this.props.i)}
        onMouseLeave={() => this.props.onMouseLeave(this.props.i)}  
        onBlur={(e) => this.props.onBlur(e, this.props.i)}
        fieldDelete={() => this.props.fieldDelete(this.props.i)}
      />    }

    
    
    return (
    <div key={this.props.i} >
    {displayField}
    </div>
      
      )
  }
}    
    
      // <div 
      //   id={this.props.i}
      //   style={field}
      //   draggable="true"
      //   onDragStart={(e) => this.props.onDragStart(e)}
      //   onDrop={(e) => this.props.onDrop(e)}
      //   onDragOver= {(e) =>this.props.onDragOver(e) }
      //   onMouseEnter={() =>this.props.onMouseEnter()}
      //   onMouseLeave={() => this.props.onMouseLeave()}
      //   >
      //   <div 
      //     style={innerFieldStyle}
      //     onClick={(e) => this.props.onClick(e)}>
      //     {this.props.field.boxType}
      //   </div>
      // </div>
      
      //   <div 
      //       className="toolTipOff"
      //       style={toolTipStyle}
      //       id={id}
      //       >
      //       <label for="name">Name: </label>
      //       <input id="name" type="text" name="name"/>
      //       <label for="required">Required: </label>
      //       <input id="required" type="checkbox" name="required"/>
      //       <br />
      //       <button
      //         className="btn btn-danger"
      //         ><i class="fas fa-trash-alt"></i></button>            
      //   </div>




class Controls extends Component {
  render() {
    let button = {
    //   border: '1px solid black',
      textAlign: 'left',
      cursor: 'move',
      width: 'auto',
      height: '25px',
      marginTop: '10px',
    //   borderRadius: '5px',
      fontFamily: 'Arial',
      // borderLeft: '5px solid white',
      paddingLeft: '15px',

    }
    
    return (
      <div 
        id={this.props.type}
        style={button} 
        draggable="true"
        onClick={() => this.props.onClick()}
        onMouseEnter={() => this.props.onMouseEnter()}
        onMouseLeave={() => this.props.onMouseLeave()}
        onDragStart={(e) => this.props.onDragStart(e)}
        onBlur={() => this.props.onBlur()}
        >
        <i className="fas fa-font"></i>
        <span style={{marginLeft: '10px'}}>
        {this.props.type}
        </span>
        

        </div>
      
      )
  }
}
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      // date: new Date(),
      fields: [
      //   {
      //   name: "firstName",
      //   boxType: "Textbox",
      //   width: 250,
      //   height: 30,
      //   value: "",
      //   xfield: 674,
      //   yfield: 93,
      //   required: false,
      //   showTooltip: false
      // },
      // {
      //   name: "check1",
      //   boxType: "Checkbox",
      //   xfield: 622,
      //   yfield: 267,
      //   required: false,
         
      // },
      // {
      //   name: "date",
      //   boxType: "DatePicker",
      //   xfield: 700,
      //   yfield: 250,
      //   required: false
      // },
      // {
      //   name: "signature",
      //   boxType: "Signature",
      //   xfield: 700,
      //   yfield: 400,
      //   required: false
      // },
       
        ],
      dragType: "",
      xBox: "",
      yBox: "",
      xClickPoint: "",
      yClickPoint: "",
      move: false,
      moveId: 0,
    };
    this.mouseEnter = this.mouseEnter.bind(this);
  }
  drag(e, type) {
    console.log("new drag", type)
    e.dataTransfer.setData("text", e.target.id);
    // var newStateArray = this.state.dragType.slice();
    this.setState(() => {
      return {dragType: type}
      })
    let my_div = document.getElementById(e.target.id)
    let control_box = document.getElementById("control_box")
    let box = { left: 0, top: 0 };
    box = my_div.getBoundingClientRect();
    let cBox = control_box.getBoundingClientRect();
    console.log("cBox: ",cBox.x, " cBoxY: ", cBox.y)
    let x = e.pageX - window.scrollX
    let y = e.pageY - window.scrollY
    // console.log("box x: ", box.x, " box.y", box.y)
    // console.log("click x: ", x, " click y: ", y)
    // console.log("document.scrollTop: ", document.scrollTop())
    // console.log("box ")
    this.setState(() => {
      return {
        xClickPoint: x,
        yClickPoint: y,
        xBox: box.x,
        yBox: box.y,
        // cBoxX: cBox.x,
        // cBoxY: cBox.y
      }
    })
  }
  move(e) {
    console.log("move", e.target.id)
    console.log("field type: ", this.state.fields[e.target.id])
    e.dataTransfer.setData("text", e.target.id);
    // let id = e.target.id
    this.setState(
      {
        move: true,
        moveId: e.target.id
      }
    );
    var my_div = document.getElementById(e.target.id)
    var box = { left: 0, top: 0 };
    box = my_div.getBoundingClientRect();
    // console.log("box x: ", box.x, " box.y", box.y)
    // console.log("page x: ", e.pageX, " page y: ", e.pageY)
    let x = e.pageX - window.scrollX
    let y = e.pageY - window.scrollY
    // console.log("box ", box.x)
    this.setState(() => {
      return {
        xClickPoint: x,
        yClickPoint: y,
        xBox: box.x,
        yBox: box.y
      }
    })
    
  }
  drop(e) {

    console.log("drop")
    e.preventDefault();
    // var data = e.dataTransfer.getData("text");
    // e.target.appendChild(document.getElementById(data));
    // var x = this.state.x - (this.state.xClickPoint - this.state.xBox)
    // var y = this.state.y - (this.state.yClickPoint - this.state.yBox)
    // console.log("x: ", e.pageX, " y: ", e.pageY)
    // let xFieldForm = e.pageX + ( e.pageX - this.formCoords(e).left )
    // console.log("this.formCoords(e).left:", this.formCoords(e).left )
    // console.log("e.pageX: ", e.pageX)
    // let yFieldForm = e.pageY - this.formCoords(e).top 
    if(this.state.move === false){
      console.log("drop new")
      var joined = this.state.fields.concat({
        // id: Date.now(), 
        name: 'none', 
        boxType: this.state.dragType, 
        xfield: e.pageX - (this.state.xClickPoint - this.state.xBox), 
        yfield: e.pageY - (this.state.yClickPoint - this.state.yBox),
        // xfield: e.pageX - (this.state.xClickPoint - this.state.xBox),
        // yfield: e.pageY - (this.state.yClickPoint - this.state.yBox),
        showTooltip: false,
        required: false
      })
      this.setState({fields: joined})
      // console.log("Rel Pos: ", this.formCoords(e).top)
      
    } else {
      console.log("drop existing", e.target.id)
      const fields = this.state.fields
      let idOfMovingField = this.state.moveId
      console.log("idOfMovingField: ", idOfMovingField)
      fields[idOfMovingField] = {
        id: idOfMovingField, 
        name: fields[idOfMovingField].name, 
        boxType: fields[idOfMovingField].boxType, 
        // xfield: this.state.x - (this.state.xClickPoint - this.state.xBox), 
        // yfield: this.state.y - (this.state.yClickPoint - this.state.yBox),
        // xfield: e.pageX - (this.state.xClickPoint - this.state.xBox),
        // yfield: e.pageY - (this.state.yClickPoint - this.state.yBox),
        xfield: e.pageX - (this.state.xClickPoint - this.state.xBox),
        yfield: e.pageY - (this.state.yClickPoint - this.state.yBox),
        showTooltip: false,
        required: false
        
      }
      this.setState(fields)
      let move = {move: false, moveId: null}
      this.setState(move)
      // this.formCoords(e)
      
      
      // let all_fields = this.state.fields.slice()
      // const curr_index = all_fields.findIndex((elem) => {
      //   return elem.id === this.state.moveId 
      // })
      
      // console.log(this.state.moveId)
      
      // const curr_field = all_fields[curr_index]
      // curr_field['xfield'] = x
      // curr_field['yfield'] = y
      
      // all_fields[curr_index] = curr_field
      // this.setState({fields: all_fields, move: false})
          
      // this.setState.fields[this.state.moveId](() => {
      //   return {
      //     xfield: x,
      //     yfield: y,
      //   }
      // })
      // this.setState(() => {
      //   return {
      //     move: false  
      //   }
      // })
    }
  }
  allowDrop(e) {
    // console.log("allowDrop", e.pageX, e.pageY)
    e.preventDefault();
    // this.setState({ x: e.pageX, y: e.pageY })

  }
  coords(e) {
    this.setState({ x: e.pageX, y: e.pageY })
  }
  
  formCoords(e) {
    // console.log("formCoords hit")
    this.setState({ x: e.pageX, y: e.pageY })
    var parentPos = document.getElementById('page').getBoundingClientRect(),
    childrenPos = document.getElementById('form').getBoundingClientRect(),
    relativePos = {};
    relativePos.top = childrenPos.top - parentPos.top,
    // relativePos.right = childrenPos.right - parentPos.right,
    // relativePos.bottom = childrenPos.bottom - parentPos.bottom,
    relativePos.left = childrenPos.left - parentPos.left;
    // this.setState({ xForm: e.pageX-relativePos.left, yForm: e.pageY-relativePos.top})
    // console.log(relativePos);
    return relativePos
        
  }
  closeTooltip() {
    console.log("closeToolTip")
  }
  formClick() {
    console.log("formClick", this.state.toolTip)
    if(this.state.toolTip !== undefined){
      
      let toolTip = "tooltip" + this.state.toolTip
      let field = document.getElementById(toolTip)
      field.classList.remove("toolTipOn")
      field.classList.add("toolTipOff")
    }
    

    // let field = document.getElementById(id)
    // field.classList.toggle("toolTipOn")
    // field.classList.toggle("toolTipOff")    
    // let activeTooltip = this.state.activeTooltip
    // console.log("activeTooltip: ", activeTooltip)
    // let field = document.getElementById(activeTooltip)
    // field.style.height = "20px"
    // this.setState({activeTooltip: -1})
      
  }
  edit(id) {
    console.log("edit", id)
    let toolTipId = "tooltip" + id
    this.formClick()
    let field = document.getElementById(toolTipId)
    field.classList.toggle("toolTipOn")
    field.classList.toggle("toolTipOff")
    this.setState({toolTip: id})
    // field.style.height = "200px"
    // this.setState({activeTooltip: id})
    
    // let target = "div" + id
    // let tooltip = document.getElementById(target)
    // console.log(this.state.fields[id].showTooltip)
    // if (this.state.fields[id].showTooltip === false){
    //   this.setState((state, id) => ({showTooltip: true}))
    // } else {
    //   this.setState((state, id) => ({showTooltip: false}))
    // }
  }
  mouseEnter(id) {
    console.log("mouseEnter", id)
    let field = document.getElementById(id)
    // field.style.borderLeft = "5px solid darkgrey"
    field.classList.add("fieldHover")
  }
  mouseLeave(id) {
    // console.log("mouseLeave", id)
    let field = document.getElementById(id)
    // field.style.borderLeft = "5px solid white"
    field.classList.remove("fieldHover")
  }
  mouseEnterControl(id) {
    let field = document.getElementById(id)
    field.classList.add("controlHover")
  }
  mouseLeaveControl(id) {
    let field = document.getElementById(id)
    field.classList.remove("controlHover")
  }
  handleClick(e) {
    console.log("handle click", e)
  }
  renderControl(type) {
    return (
      <Controls 
        type={type}
        draggable="true"
        onClick={(e) => this.handleClick(e)}
        onMouseEnter={() => this.mouseEnterControl(type)}
        onMouseLeave={() => this.mouseLeaveControl(type)}
        onDragStart={(e) => this.drag(e, type)}
      
      />
      )
  }
  renderTextbox(field) {
    return (
      <div 
        id={field}
        className="button"
        // style={button} 
        draggable="true"
        onClick={(e) => this.handleClick(e)}
        onMouseEnter={() => this.mouseEnterControl(field)}
        onMouseLeave={() => this.mouseLeaveControl(field)}
        onDragStart={(e) => this.drag(e, field)}
        onBlur={() => this.onBlur()}
        >
        <i className="fas fa-font"></i>
        <span style={{marginLeft: '10px'}}>
        {field}
        </span>
      </div>
      )
  }
  renderCheckbox(field) {
    return (
      <div 
        id={field}
        className="button"
        // style={button} 
        draggable="true"
        onClick={(e) => this.handleClick(e)}
        onMouseEnter={() => this.mouseEnterControl(field)}
        onMouseLeave={() => this.mouseLeaveControl(field)}
        onDragStart={(e) => this.drag(e, field)}
        onBlur={() => this.onBlur()}
        >
        <i className="fas fa-check-square"></i>
        <span style={{marginLeft: '10px'}}>
        {field}
        </span>
      </div>
      )  }
  renderSignaturebox(field) {
    return (
      <div 
        id={field}
        className="button"
        // style={button} 
        draggable="true"
        onClick={(e) => this.handleClick(e)}
        onMouseEnter={() => this.mouseEnterControl(field)}
        onMouseLeave={() => this.mouseLeaveControl(field)}
        onDragStart={(e) => this.drag(e, field)}
        onBlur={() => this.onBlur()}
        >
        <i className="fas fa-pencil-alt"></i>
        <span style={{marginLeft: '10px'}}>
        {field}
        </span>
      </div>
      )
  }
  renderDatebox(field) {
    return (
      <div 
        id={field}
        className="button"
        // style={button} 
        draggable="true"
        onClick={(e) => this.handleClick(e)}
        onMouseEnter={() => this.mouseEnterControl(field)}
        onMouseLeave={() => this.mouseLeaveControl(field)}
        onDragStart={(e) => this.drag(e, field)}
        onBlur={() => this.onBlur()}
        >
        <i className="fas fa-calendar-alt"></i>
        <span style={{marginLeft: '10px'}}>
        {field}
        </span>
      </div>
      )
  }
  renderRadiobox(field) {
    return (
      <div 
        id={field}
        className="button"
        // style={button} 
        draggable="true"
        onClick={(e) => this.handleClick(e)}
        onMouseEnter={() => this.mouseEnterControl(field)}
        onMouseLeave={() => this.mouseLeaveControl(field)}
        onDragStart={(e) => this.drag(e, field)}
        onBlur={() => this.onBlur()}
        >
        <i className="fas fa-dot-circle"></i>
        <span style={{marginLeft: '10px'}}>
        {field}
        </span>
      </div>
      )
  }
  onBlur(e, id) {
    console.log("onBlur")
    const fields = this.state.fields;
    fields[id].name = e.target.value
    this.setState({ fields })
  }
  fieldDelete(id) {
    console.log("fieldDelete", id)
    let fields = this.state.fields
    fields[id] = {
        boxType: undefined,
        required: false
    }
    this.setState(fields)
  
  }


// ============================
  render() {
    // let tooltip = {
    //   backgroundColor: 'red'
    // }
    let state = {
        backgroundColor: 'lightgray'
    }
    let fieldList = {
      // position: 'sticky',
    //   border: '1px solid black',
      height: '500px'
    }
    let divStyle = {
    //   border: '1px solid black',
      height: '500px',
      marginTop: '50px'
    }
    let form = {
      // border: '1px solid black',
      marginTop: '15px',
      // height: '1450px',
      // backgroundImage: "url(http://s3.amazonaws.com/vnn-aws-sites/3581/files/2015/05/2baf45b783822afb-file-page1-5.png)",
      backgroundRepeat: 'no-repeat',
      zIndex: -100
    }
    // let button = {
    //   border: '1px solid black',
      // textAlign: 'left',
      // cursor: 'move',
      // width: '200px',
      // height: '20px',
      // backgroundColor: 'white',
      // color: 'white',
      // marginTop: '10px',
    //   borderRadius: '5px',
    //   fontFamily: 'Arial',
    //   fontWeight: 'bold'

    // }
    // const fieldlist = this.state.fields.map((field, i) =>
    //   <div key={i}>
    //   <li>
    //     <ul>
    //       <li>Name: {field.name}</li>
    //       <li>Type: {field.boxType}</li>
    //       <li>Req: {field.required.toString()}</li>
    //     </ul>
    //   </li>
    //   </div>
    // )
    // const renderTextField = this.state.fields.filter(function (field) {
    //     return field.boxType === "Text"
    //   })    

    const formRenderFormField = this.state.fields.map((field, i) =>
      <FormField 
        key={i}
        i={i}
        field={field}
        showTooltip={() => this.state.showTooltip}
        onDragStart={(e) => this.move(e)}
        onClick={() => this.edit(i)}
        onDrop={(e) => this.drop(e)}
        onDragOver={(e) => this.allowDrop(e)}  
        onMouseEnter={() => this.mouseEnter(i)}
        onMouseLeave={() => this.mouseLeave(i)}  
        onBlur={(e) => this.onBlur(e, i)}
        fieldDelete={() => this.fieldDelete(i)}
      />
    )
    // const renderCheckboxField = this.state.fields.filter(function (field) {
    //   return field.boxType === "Checkbox"
    // })
    // const formRenderCheckbox = renderCheckboxField.map((field, i) =>
    //   <CheckBox 
    //     key={i}
    //     i={i}
    //     field={field}
    //     showTooltip={() => this.state.showTooltip}
    //     onDragStart={(e) => this.move(e)}
    //     onClick={() => this.edit(i)}
    //     onDrop={(e) => this.drop(e)}
    //     onDragOver={(e) => this.allowDrop(e)}  
    //     onMouseEnter={() => this.mouseEnter(i)}
    //     onMouseLeave={() => this.mouseLeave(i)}  
    //     onBlur={(e) => this.onBlur(e, i)}
    //   />
    // )    
    // not used
    // const formRender = this.state.fields.map((field, i) =>
    // <div key={i}>
    //   <div 
    //     id={i}
    //     style={{
    //       top: field.yfield, 
    //       left: field.xfield,
    //       zIndex: '100', 
    //       position: 'absolute',
    //       // border: '1px solid black',
    //       backgroundColor: 'blue',
    //       color: 'white',
    //       fontFamily: 'Trebuchet MS',
    //       fontWeight: 'bold',
    //       width: '200px',
    //       height: '20px',
    //       textAlign: 'center',
    //       borderRadius: '5px',
    //       resize: 'both',
    //       overflow: 'auto',
    //       cursor: 'pointer',
    //       overflowX: 'hidden'
    //     }}
    //     draggable="true"
    //     onDragStart={(e) => this.move(e)}
    //     onClick={() => this.edit(i)}
    //     onDrop={(e) => this.drop(e)}
    //     onDragOver={(e) => this.allowDrop(e)}  
    //     onMouseEnter={() => this.mouseEnter(i)}
    //     onMouseLeave={() => this.mouseLeave(i)}
        
    //     >
    //     <input 
    //       id={"input"+i}
    //       type="text"
    //       onBlur={(e) => this.onBlur(e, i)}
    //       />
    //     <input
    //       type="checkbox"/>
    //   </div>
    // </div>
    // )
    let marginTop = '50px'
    let left = {
      float: 'left',
      width: '150px',
      position: 'fixed',
      marginTop: marginTop
      
    }
    let center = {
      float: 'left',
      width: '900px',
      // position: 'fixed',
      marginLeft: '150px',
      marginTop: marginTop
    }
    // let right = {
    //   float: 'left',
    //   width: '900px',
    //   marginLeft: '370px',
    //   marginTop: marginTop
      
    // }
    // const { x, y, xForm, yForm } = this.state
    let control = {
      // border: '1px solid black'
      topMargin: '150px'
    }
    
    return (
      <div 
        id="page"
        // onMouseMove={this.coords.bind(this)}
      >
        <div>
          <div>
            <div style={left}>
            <div id="control_box" style={divStyle}>
              <div style={control}>
                {this.renderTextbox("Textbox")}
                {this.renderCheckbox("Checkbox")}
                {this.renderSignaturebox("Signature")}
                {this.renderDatebox("DatePicker")}
              </div>
              
              {/*
              <div style={control}>
              <p>version 2 - Controls Comp</p>
              <Controls 
                type="textBoxC"
                draggable="true"
                onClick={() => this.handleClick()}
                onMouseEnter={() => this.mouseEnter("textBoxC")}
                onMouseLeave={() => this.mouseLeave("textBoxC")}
                onDragStart={(e) => this.drag(e, "textBoxC")}
                />
              <Controls 
                type="datePickerC"
                draggable="true"
                onMouseEnter={() => this.mouseEnter("datePickerC")}
                onMouseLeave={() => this.mouseLeave("datePickerC")}
                onDragStart={(e) => this.drag(e, "datePickerC")}
              />
              </div>
              <div style={control}>
              <p>version 1 - HTML</p>
              <div 
                className="rounded"
                id="textBox"
                style={button} 
                draggable="true"
                onDragStart={(e) => this.drag(e, "textBox")}
                onMouseEnter={() => this.mouseEnter("textBox")}
                onMouseLeave={() => this.mouseLeave("textBox")}
                >textBox</div>
              <div 
                id="datePicker"
                style={button} 
                draggable="true"
                onDragStart={(e) => this.drag(e, "datePicker")}
                >datePicker</div>
            </div>*/}
            </div>
            </div>
            <div style={center}>
            <div>
              <div 
                id="form"
                style={form}
                onDrop={(e) => this.drop(e)}
                onDragOver={(e) => this.allowDrop(e)}
                onClick={() => this.formClick()}

                >
                <img 
                  style={{ zIndex: 10}}
                  src="http://s3.amazonaws.com/vnn-aws-sites/3581/files/2015/05/2baf45b783822afb-file-page1-5.png"/>
                <img 
                  style={{ zIndex: 10}}
                  src="http://s3.amazonaws.com/vnn-aws-sites/3581/files/2015/05/2baf45b783822afb-file-page1-5.png"/>
                <img 
                  style={{ zIndex: 10}}
                  src="http://s3.amazonaws.com/vnn-aws-sites/3581/files/2015/05/2baf45b783822afb-file-page1-5.png"/>
                
                
              </div>
            </div> 
            </div> 
            <div id="fields">
              {formRenderFormField}
            </div>
            
          </div>
        </div>
      </div>
    );
  }
}
              // {formRender}

export default App;

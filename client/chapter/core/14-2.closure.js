function earth (){

  let water = true;
  let gravity = 10;
  
  return (value) => [water,gravity]
  

}




const ufo = earth()


ufo(false)



// button.addEventListener('clicked', () => {

// })


function useState(init){
  let value = init;

  function read() {
    return value;
  }

  function write(newValue){
    value = newValue;
  }

  return [read,write]
}

const [number,setNumber] = useState(10);



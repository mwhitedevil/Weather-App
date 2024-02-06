const InputBox = document.getElementById("inpbox");
const Button = document.getElementById("Button");
const City = document.getElementById('location')
const DisplayImage = document.getElementById('image')
const Temp = document.getElementById('temp')
const Type = document.getElementById('type')
const API_key = 'd5d6ac8b17695a6123d2ef5e63653bdb'

const Data = async function(search){
    let GetData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_key}&units=metric`,{
        headers:{
            accept : 'application/json charset=utf-8'
        }
    })
    console.log(GetData);
    let jsonData = await GetData.json()
    console.log(jsonData);
    console.log(jsonData.name);
    console.log(jsonData.main.temp);
    console.log(jsonData.weather[0].main);

    City.innerHTML = jsonData.name
    Temp.innerHTML = Math.floor(jsonData.main.temp)+"°C"
    Type.innerHTML = jsonData.weather[0].main

    if(Type.innerHTML == 'Clouds'){
        DisplayImage.src = '/image/clouds.png'
    } 
    else if(Type.innerHTML === 'Haze'){
        DisplayImage.src = '/image/haze.png'

    }
    else if(Type.innerHTML === 'Rain'){
        DisplayImage.src = '/image/rain.png'

    }
    else if(Type.innerHTML === 'Clear'){
        DisplayImage.src = '/image/clears.png'

    }
    InputBox.value =''


 

}
Button.addEventListener('click',function(){
    search = InputBox.value
    Data(search)


})


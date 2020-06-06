console.log('test')

// var zodiak = document.getElementById("zodiak1")
// console.log(zodiak)


function getSelectValue1(){
    var selectedValue1 = document.getElementById("select1").value
    var zodiak = document.getElementById("zodiak1")
    var imgZodiak = zodiak.innerHTML
    console.log(imgZodiak)
    console.log(selectedValue1)
    console.log(typeof selectedValue1)


    if (selectedValue1 === 'Zodiac?'){
        zodiak.innerHTML = '<img src="img/placeholder.png">'
    }else if (selectedValue1 === 'Aries'){
        zodiak.innerHTML = '<img src="img/Aries.png">'
    }else if (selectedValue1 === 'Taurus'){
        zodiak.innerHTML = '<img src="img/Taurus.png">'
    }else if (selectedValue1 === 'Gemini'){
        zodiak.innerHTML = '<img src="img/Gemini.png">'
    }else if (selectedValue1 === 'Cancer'){
        zodiak.innerHTML = '<img src="img/Cancer.png">'
    }else if (selectedValue1 === 'Leo'){
        zodiak.innerHTML = '<img src="img/Leo.png">'
    }else if (selectedValue1 === 'Virgo'){
        zodiak.innerHTML = '<img src="img/Virgo.png">'
    }else if (selectedValue1 === 'Libra'){
        zodiak.innerHTML = '<img src="img/Libra.png">'
    }else if (selectedValue1 === 'Scorpio'){
        zodiak.innerHTML = '<img src="img/Scorpio.png">'
    }else if (selectedValue1 === 'Sagittarius'){
        zodiak.innerHTML = '<img src="img/Sagittarius.png">'
    }else if (selectedValue1 === 'Capricorn'){
        zodiak.innerHTML = '<img src="img/Capricorn.png">'
    }else if (selectedValue1 === 'Aquarius'){
        zodiak.innerHTML = '<img src="img/Aquarius.png">'
    }else if (selectedValue1 === 'Pisces'){
        zodiak.innerHTML = '<img src="img/Pisces.png">'
    }
}

function getSelectValue2(){
    var selectedValue1 = document.getElementById("select2").value
    var zodiak = document.getElementById("zodiak2")
    var imgZodiak = zodiak.innerHTML
    console.log(imgZodiak)
    console.log(selectedValue1)
    console.log(typeof selectedValue1)


    if (selectedValue1 === 'Zodiac?'){
        zodiak.innerHTML = '<img src="img/placeholder.png">'
    }else if (selectedValue1 === 'Aries'){
        zodiak.innerHTML = '<img src="img/Aries.png">'
    }else if (selectedValue1 === 'Taurus'){
        zodiak.innerHTML = '<img src="img/Taurus.png">'
    }else if (selectedValue1 === 'Gemini'){
        zodiak.innerHTML = '<img src="img/Gemini.png">'
    }else if (selectedValue1 === 'Cancer'){
        zodiak.innerHTML = '<img src="img/Cancer.png">'
    }else if (selectedValue1 === 'Leo'){
        zodiak.innerHTML = '<img src="img/Leo.png">'
    }else if (selectedValue1 === 'Virgo'){
        zodiak.innerHTML = '<img src="img/Virgo.png">'
    }else if (selectedValue1 === 'Libra'){
        zodiak.innerHTML = '<img src="img/Libra.png">'
    }else if (selectedValue1 === 'Scorpio'){
        zodiak.innerHTML = '<img src="img/Scorpio.png">'
    }else if (selectedValue1 === 'Sagittarius'){
        zodiak.innerHTML = '<img src="img/Sagittarius.png">'
    }else if (selectedValue1 === 'Capricorn'){
        zodiak.innerHTML = '<img src="img/Capricorn.png">'
    }else if (selectedValue1 === 'Aquarius'){
        zodiak.innerHTML = '<img src="img/Aquarius.png">'
    }else if (selectedValue1 === 'Pisces'){
        zodiak.innerHTML = '<img src="img/Pisces.png">'
    }

}



function process(){
    var number = 0
    var resultGambar = document.getElementById("result")
    //var imgGambar = resultGambar.innerHTML
    

    var resultPercentage = document.getElementById("percentage")
    console.log(resultPercentage.textContent)
    
    var selectedValue1 = document.getElementById("select1").value
    var selectedValue2 = document.getElementById("select2").value
    

    if (selectedValue1 === 'Zodiac?' || selectedValue2 ==='Zodiac?'){
        resultGambar.innerHTML ='<img src="img/question.png">'
        resultPercentage.textContent = 'Assign zodiac!'
        alert("Assign the Zodiac first!")
        
    }else if (selectedValue1 === 'Aries'){
        if (selectedValue2 === 'Zodiac?'){
        }else if (selectedValue2 === 'Aries'){
            number = 50
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Taurus'){
            number = 38
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Gemini'){
            number = 83
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Cancer'){
            number = 42
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Leo'){
            number = 97
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Virgo'){
            number = 63
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Libra'){
            number = 85
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Scorpio'){
            number = 50
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Sagittarius'){
            number = 93
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Capricorn'){
            number = 47
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Aquarius'){
            number = 78
            resultPercentage.textContent = `${number}%`
        } else if (selectedValue2 === 'Pisces'){
            number = 67
            resultPercentage.textContent = `${number}%`
        }
    }else if (selectedValue1 === 'Taurus'){
        if (selectedValue2 === 'Zodiac?'){
        }else if (selectedValue2 === 'Aries'){
            number = 38
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Taurus'){
            number = 65
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Gemini'){
            number = 33
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Cancer'){
            number = 97
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Leo'){
            number = 73
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Virgo'){
            number = 90
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Libra'){
            number = 65
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Scorpio'){
            number = 88
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Sagittarius'){
            number = 30
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Capricorn'){
            number = 98
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Aquarius'){
            number = 58
            resultPercentage.textContent = `${number}%`
        } else if (selectedValue2 === 'Pisces'){
            number = 85
            resultPercentage.textContent = `${number}%`
        }
    }else if (selectedValue1 === 'Gemini'){
        if (selectedValue2 === 'Zodiac?'){
        }else if (selectedValue2 === 'Aries'){
            number = 83
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Taurus'){
            number = 33
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Gemini'){
            number = 60
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Cancer'){
            number = 65
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Leo'){
            number = 88
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Virgo'){
            number = 68
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Libra'){
            number = 93
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Scorpio'){
            number = 28
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Sagittarius'){
            number = 60
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Capricorn'){
            number = 68
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Aquarius'){
            number = 85
            resultPercentage.textContent = `${number}%`
        } else if (selectedValue2 === 'Pisces'){
            number = 53
            resultPercentage.textContent = `${number}%`
        }
    }else if (selectedValue1 === 'Cancer'){
        if (selectedValue2 === 'Zodiac?'){
        }else if (selectedValue2 === 'Aries'){
            number = 42
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Taurus'){
            number = 97
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Gemini'){
            number = 65
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Cancer'){
            number = 75
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Leo'){
            number = 35
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Virgo'){
            number = 90
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Libra'){
            number = 43
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Scorpio'){
            number = 94
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Sagittarius'){
            number = 53
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Capricorn'){
            number = 83
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Aquarius'){
            number = 27
            resultPercentage.textContent = `${number}%`
        } else if (selectedValue2 === 'Pisces'){
            number = 98
            resultPercentage.textContent = `${number}%`
        }
    }else if (selectedValue1 === 'Leo'){
        if (selectedValue2 === 'Zodiac?'){
        }else if (selectedValue2 === 'Aries'){
            number = 97
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Taurus'){
            number = 73
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Gemini'){
            number = 88
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Cancer'){
            number = 35
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Leo'){
            number = 45
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Virgo'){
            number = 35
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Libra'){
            number = 97
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Scorpio'){
            number = 58
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Sagittarius'){
            number = 93
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Capricorn'){
            number = 35
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Aquarius'){
            number = 68
            resultPercentage.textContent = `${number}%`
        } else if (selectedValue2 === 'Pisces'){
            number = 38
            resultPercentage.textContent = `${number}%`
        }
    }else if (selectedValue1 === 'Virgo'){
        if (selectedValue2 === 'Zodiac?'){
        }else if (selectedValue2 === 'Aries'){
            number = 63
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Taurus'){
            number = 90
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Gemini'){
            number = 68
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Cancer'){
            number = 90
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Leo'){
            number = 35
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Virgo'){
            number = 65
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Libra'){
            number = 68
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Scorpio'){
            number = 88
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Sagittarius'){
            number = 48
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Capricorn'){
            number = 95
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Aquarius'){
            number = 30
            resultPercentage.textContent = `${number}%`
        } else if (selectedValue2 === 'Pisces'){
            number = 88
            resultPercentage.textContent = `${number}%`
        }
    }else if (selectedValue1 === 'Libra'){
        if (selectedValue2 === 'Zodiac?'){
        }else if (selectedValue2 === 'Aries'){
            number = 85
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Taurus'){
            number = 65
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Gemini'){
            number = 93
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Cancer'){
            number = 43
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Leo'){
            number = 97
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Virgo'){
            number = 68
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Libra'){
            number = 75
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Scorpio'){
            number = 35
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Sagittarius'){
            number = 73
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Capricorn'){
            number = 55
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Aquarius'){
            number = 90
            resultPercentage.textContent = `${number}%`
        } else if (selectedValue2 === 'Pisces'){
            number = 88
            resultPercentage.textContent = `${number}%`
        }
    }else if (selectedValue1 === 'Scorpio'){
        if (selectedValue2 === 'Zodiac?'){
        }else if (selectedValue2 === 'Aries'){
            number = 50
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Taurus'){
            number = 88
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Gemini'){
            number = 28
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Cancer'){
            number = 94
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Leo'){
            number = 58
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Virgo'){
            number = 88
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Libra'){
            number = 35
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Scorpio'){
            number = 80
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Sagittarius'){
            number = 28
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Capricorn'){
            number = 95
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Aquarius'){
            number = 73
            resultPercentage.textContent = `${number}%`
        } else if (selectedValue2 === 'Pisces'){
            number = 97
            resultPercentage.textContent = `${number}%`
        }
    }else if (selectedValue1 === 'Sagittarius'){
        if (selectedValue2 === 'Zodiac?'){
        }else if (selectedValue2 === 'Aries'){
            number = 93
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Taurus'){
            number = 30
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Gemini'){
            number = 60
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Cancer'){
            number = 53
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Leo'){
            number = 93
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Virgo'){
            number = 48
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Libra'){
            number = 73
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Scorpio'){
            number = 28
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Sagittarius'){
            number = 45
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Capricorn'){
            number = 60
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Aquarius'){
            number = 90
            resultPercentage.textContent = `${number}%`
        } else if (selectedValue2 === 'Pisces'){
            number = 63
            resultPercentage.textContent = `${number}%`
        }
    }else if (selectedValue1 === 'Capricorn'){
        if (selectedValue2 === 'Zodiac?'){
        }else if (selectedValue2 === 'Aries'){
            number = 47
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Taurus'){
            number = 98
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Gemini'){
            number = 68
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Cancer'){
            number = 83
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Leo'){
            number = 35
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Virgo'){
            number = 95
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Libra'){
            number = 55
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Scorpio'){
            number = 95
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Sagittarius'){
            number = 60
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Capricorn'){
            number = 75
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Aquarius'){
            number = 68
            resultPercentage.textContent = `${number}%`
        } else if (selectedValue2 === 'Pisces'){
            number = 88
            resultPercentage.textContent = `${number}%`
        }
    }else if (selectedValue1 === 'Aquarius'){
        if (selectedValue2 === 'Zodiac?'){
        }else if (selectedValue2 === 'Aries'){
            number = 78
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Taurus'){
            number = 58
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Gemini'){
            number = 85
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Cancer'){
            number = 27
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Leo'){
            number = 68
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Virgo'){
            number = 30
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Libra'){
            number = 90
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Scorpio'){
            number = 73
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Sagittarius'){
            number = 90
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Capricorn'){
            number = 68
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Aquarius'){
            number = 45
            resultPercentage.textContent = `${number}%`
        } else if (selectedValue2 === 'Pisces'){
            number = 45
            resultPercentage.textContent = `${number}%`
        }
    }else if (selectedValue1 === 'Pisces'){
        if (selectedValue2 === 'Zodiac?'){
        }else if (selectedValue2 === 'Aries'){
            number = 67
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Taurus'){
            number = 85
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Gemini'){
            number = 53
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Cancer'){
            number = 98
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Leo'){
            number = 38
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Virgo'){
            number = 88
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Libra'){
            number = 88
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Scorpio'){
            number = 97
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Sagittarius'){
            number = 63
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Capricorn'){
            number = 88
            resultPercentage.textContent = `${number}%`
        }else if (selectedValue2 === 'Aquarius'){
            number = 45
            resultPercentage.textContent = `${number}%`
        } else if (selectedValue2 === 'Pisces'){
            number = 60
            resultPercentage.textContent = `${number}%`
        }
    }







    if (number <= 60 && selectedValue1 !== 'Zodiac?' && selectedValue2 !== 'Zodiac?'){
        resultGambar.innerHTML ='<img src="img/no.gif">'
    }else if (number > 60 && number <= 80){
        resultGambar.innerHTML ='<img src="img/maybe.gif">'
    }else if (number > 80){
        resultGambar.innerHTML ='<img src="img/congratulations.gif">'
    }

    
}
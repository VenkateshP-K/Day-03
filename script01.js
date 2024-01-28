var request = new XMLHttpRequest()
request.open("Get","https://restcountries.com/v3.1/all")
request.send()
request.onload = function(){
    {
    var res = JSON.parse(request.response)
    console.log(res);
}
for (var i = 0;i < res.length; i++){
    console.log(res[i].flags.svg )
}
for (var i = 0;i<res.length;i++){
    console.log("Name ; "+res[i].name.common+" Population ; "+res[i].population+" Region ; "+res[i].region+" Subregion ; "+res[i].subregion)
}
}
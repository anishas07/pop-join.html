var friends = ['anisha','anzel', 'aaysuh','umazia'] ;
document.getElementById("p1").innerHTML = friends[0] ;

//join method
document.getElementById("demo1").innerHTML = friends.join(" ~ ") ;
//pop method
friends.pop()
document.getElementById("demo2").innerHTML = friends ;
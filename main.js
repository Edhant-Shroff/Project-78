var family_array = ["https://i.postimg.cc/MKdhy06Z/family.jpg","https://i.postimg.cc/L6HcYQM0/grand-father.png","https://i.postimg.cc/wjMnFtMX/father.jpg","https://i.postimg.cc/5ymDKL83/bro.jpg","https://i.postimg.cc/JnL6wtrd/sister.jpg","https://i.postimg.cc/bw5W5zSK/mother.jpg"];
var family_member = ["family book","Dada","Papa","Bhai","Didi","Mummy"];
var counter = 0;
function update() {
    counter = counter + 1;
    if (counter == 6) {counter = 0}
    document.getElementById("image1").src = family_array[counter];
    document.getElementById("member_name").innerHTML = family_member[counter];
}
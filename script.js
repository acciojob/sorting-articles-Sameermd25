//your JS code here. If required.
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
bands.sort((a,b)=>{
	function aAnThe(str){
		let arr=str.split(" ");
		if(arr[0]=="A" || arr[0]=="An" || arr[0]=="The"){
			arr.splice(0,1);
			return arr.join(" ");
		}
		else{
			return str;
		}
	}
	let word1=aAnThe(a);
	let word2=aAnThe(b);
	return word1.localeCompare(word2);
});
const ul=document.getElementById("ul");
bands.forEach((band)=>{
	const li=document.createElement("li");
	li.innerText=band;
	ul.appendChild(li);
})


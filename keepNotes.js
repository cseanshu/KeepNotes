const toggle=document.getElementById('toggledark');
const body=document.querySelector('body');
toggle.addEventListener('click',function(){
  this.classList.toggle('bi-moon-fill');
  if(this.classList.toggle('bi-brightness-high-fill')){
      body.style.background='rgb(208, 201, 201)';
      body.style.color='black';
     body.style.transition='2s';
  }
  else{
    body.style.background='black';
    body.style.color='burlywood;';
    body.style.transition='2s';
  }

})
     const updateLSData=()=>{
      const textAreaData=document.querySelectorAll('textArea');
      const Arrnote=[];
      console.log(textAreaData);
      textAreaData.forEach((notes)=>{
        //  tumne notes ki jageh note likhe thye
        return Arrnote.push(notes.value);
      })
      console.log(Arrnote);
      localStorage.setItem('Arrnote',JSON.stringify(Arrnote)); 
     }
     const addbutton=document.querySelector('.btns');
     const addnotes=(text='')=>{
        const notes=document.createElement('div') ;
        notes.classList.add('outer');
        const htmlData=`
        <div class="notecontainer">
           <div class="icon">
           <button class="Edit"><i class="fa-solid fa-pen-to-square" ></i></button>
           <button class="Delete"><i class="fa-solid fa-trash"></i></button>
           </div>
           <div class="mains ${text?" ":"hidden"}"></div>
          <textarea class="${text?"hidden":" "}" cols="" rows=""></textarea>
        </div>
   `;
     notes.insertAdjacentHTML("afterbegin",htmlData);
    //  console.log(notes)
    const Edit=notes.querySelector('.Edit')
    const Delete = notes.querySelector('.Delete')
    const mains=notes.querySelector('.mains')
    const textArea=notes.querySelector('textarea')

   Delete.addEventListener('click',()=>{
      notes.remove();
      // ####
      updateLSData();
   })
   textArea.value=text;
   mains.innerHTML=text;
    Edit.addEventListener('click',()=>{
      mains.classList.toggle('hidden');
      textArea.classList.toggle('hidden');
    }) 
   
  textArea.addEventListener('change',(event)=>{
    //  yaha bracket me event nahi likhe thye
     const Value=event.target.value;
    //  console.log(Value); 
   mains.innerHTML=Value;
  //  #####
   updateLSData();
  })
    document.body.appendChild(notes)
     }
     const  Arrnotes=JSON.parse(localStorage.getItem('Arrnote'));
      if(Arrnotes){
         Arrnotes.forEach((Arrnote)=> addnotes(Arrnote));
      }
     addbutton.addEventListener('click',()=>addnotes());
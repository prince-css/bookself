var predelete=document.querySelector("ul");

predelete.addEventListener('click',function deleting(e)
                        {
                            const pressed=e.target;
                            if(pressed.className=="delete")
                            {
                                //console.log(pressed.className);
                                const deleteObject=pressed.parentNode;
                                deleteObject.remove();
                            }
                        }
                        );
var add=document.querySelector("#addbutton");
add.addEventListener('click',function adding(e)
                    {
                        const pressed=e.target;//<b> ~ <button> ~ <div.form-group> ~ <input> ~~~~ value
                        const val=pressed.parentNode.previousElementSibling.childNodes[1].value;
                        //console.log(val);
                        const newLi=document.createElement("li");
                        newLi.className="book";
                        const newSpan=document.createElement("span");
                        newSpan.className=("name");
                        newSpan.innerHTML=val;
                        newLi.appendChild(newSpan);
                        const insertPlace=document.querySelector("ul");
                        insertPlace.appendChild(newLi);


                        const newspan2=document.createElement("span");
                        newspan2.className="delete";
                        newLi.appendChild(newspan2);
                    });
var search=document.getElementById("search");
search.addEventListener("keyup",function searching(e)
                                {
                                    var bookName=e.target.value;
                                    var books=document.getElementsByTagName("li");
                                    Array.from(books).forEach(function(book)
                                                            {
                                                                var jaAche=book.childNodes[1].childNodes[0].nodeValue;
                                                                if(jaAche.toLowerCase().indexOf(bookName.toLowerCase()) !== -1)
                                                                {
                                                                    book.style.display="block"; //jodi -1 return na kore....mane milche
                                                                }
                                                                else
                                                                {
                                                                    book.style.display="none"; //-1 return korche....mane mile nai
                                                                }

                                                            });
                                });



import React, { useEffect, useState } from 'react';
import gallery1 from '../../assets/gallray1.jpg'
import SingleGalleryPhoto from '../SingleGalleryPhoto/SingleGalleryPhoto';
const Gallery = () => {


  const [galleries, setGalleries] = useState([])

  useEffect(()=>{
    fetch('gallery.json')
    .then(res => res.json())
    .then (data =>{
      setGalleries(data)
    })
  },[])
    return (
        <div className="mt-8">
            <h2 className="title">Toy House  Gallery</h2>
            <hr className="long-line" />
            <hr className="short-line" />
            <div className="grid md:grid-cols-3 grid-cols-1 gap-8 mt-24 ">


              {
                galleries.map(gallery => <SingleGalleryPhoto
                key={gallery.id}
                gallery={gallery}
                ></SingleGalleryPhoto>
              
                )
              }
           
            </div>
        </div>
    );
};

export default Gallery;
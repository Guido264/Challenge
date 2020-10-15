import React from 'react';
import { useState, useEffect } from 'react';
import useFirestore from '../../hooks/useFirestore';
import { projectFirestore } from '../../firebase/config';

const ImageGrid = () => {
    const [toDelete, setToDelete] = useState(null);
    const { docs, setDocs } = useFirestore('images');
    
    const deleteHandler = (url) => {
        const index = docs.map(el => el.url).indexOf(url);
        const toDelete = docs[index];
        if (index !== -1) {
            docs.splice(index, 1);
        }
        setDocs([...docs]);
        setToDelete(toDelete);
    } 
 
    useEffect(() => {
       if (toDelete) {
            projectFirestore.collection('images').doc(toDelete.id).delete();
       } 
    }, [toDelete]);

    return (
        <div className="img-grid">
            { docs && docs.map(doc => (
                <div className="img-wrap" key={doc.id}>
                    <img src={doc.url} alt="uploaded pic" />
                    <button onClick={() => deleteHandler(doc.url)}>Delete</button>
                </div>
            ))}
        </div>
    )

}

export default ImageGrid;
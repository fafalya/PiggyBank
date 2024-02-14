import React, { useState } from 'react';
import ImageUploading from 'react-images-uploading';


const ImagesUpload = ({arrayImages}) => {

    const [images, setImages] = useState([]);
    const maxNumber = 3;

    const dataImagesFunction = () => {
        arrayImages(images);
    }

    async function handleImages (imageList, addUpdateIndex) {
        await setImages(imageList);
    };
    dataImagesFunction();

    return (
        <div className="App" >
            <ImageUploading
                multiple
                value={images}
                type="file"
                onChange={handleImages}
                maxNumber={maxNumber}
                dataURLKey="data_url"                
            >
                {({
                    imageList,
                    onImageUpload,
                    onImageRemoveAll,
                    onImageUpdate,
                    onImageRemove,
                    dragProps,
                }) => (
                    <div >
                        <div class="row justify-content-evenly" style={{ marginBlock : '10px'}}>
                            <div class="col-4">
                            <button type="submit" id="form-submit" class="main-dark-button" onClick={onImageUpload} {...dragProps}  >Добавить изображение</button>
                            </div>
                            <div class="col-4">
                            <button type="submit" id="form-submit" class="main-dark-button" onClick={onImageRemoveAll}  >Удалить все изображения</button>
                            </div>
                        </div>
                        {imageList.map((image, index) => (
                            <div key={index} className="image-item">
                                <img src={image['data_url']} alt="" width="100" />
                                <div>
                                    <div class="row justify-content-evenly" style={{ marginBlock : '10px'}}>
                                        <div class="col-4">
                                        <button type="submit" id="form-submit" class="main-dark-button" onClick={() => onImageUpdate(index)}>Изменить</button>
                                        </div>
                                        <div class="col-4">
                                        <button type="submit" id="form-submit" class="main-dark-button" onClick={() => onImageRemove(index)}>Удалить</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </ImageUploading>           
        </div>);  
}


export default ImagesUpload;
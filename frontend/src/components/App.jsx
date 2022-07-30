import React, {useState} from 'react';


export const App = () => {

	const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);

  const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsFilePicked(true);
	};

  const handleSubmission = async () => {
		const formData = new FormData();

		formData.append('files', selectedFile);
    const url = 'http://127.0.0.1:8000/excels'
    try {
      const response = await fetch(
        url,
        {
				method: 'POST',
				body: formData,
			})
      const blob = await response.blob()
      const downloadTag = document.createElement('a')
      downloadTag.href = URL.createObjectURL(blob)
      downloadTag.download = `sample.xlsx`
      downloadTag.click()
    } catch (error) {
      console.error(error.message)
    }
	};

	return(
    <div>
       <input type="file" name="file" onChange={changeHandler} />
       {isFilePicked ? (
         <div>
           <p>Filename: {selectedFile.name}</p>
           <p>Filetype: {selectedFile.type}</p>
           <p>Size in bytes: {selectedFile.size}</p>
           <p>
             lastModifiedDate:{' '}
             {selectedFile.lastModifiedDate.toLocaleDateString()}
           </p>
         </div>
       ) : (
         <p>Select a file to show details</p>
       )}
       <div>
         <button onClick={handleSubmission}>Submit</button>
       </div>
       
     </div>
  )
}

export default App;

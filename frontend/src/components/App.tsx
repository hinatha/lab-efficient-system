import React, { useState } from 'react';
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CancelIcon from "@mui/icons-material/Cancel";

export const App = () => {

  const [files, setFiles] = useState<File[]>([]);

  const inputId = Math.random().toString(32).substring(2);

  const handleOnSubmit = async (e: React.SyntheticEvent): Promise<void> => {
		e.preventDefault();

		const data = new FormData();
		files.map((file) => {
			data.append("files", file);
		});
		const url = 'http://127.0.0.1:8000/excels'
    try {
      const response = await fetch(
        url,
        {
			method: 'POST',
			body: data,
		})
      const blob = await response.blob()
      const downloadTag = document.createElement('a')
      downloadTag.href = URL.createObjectURL(blob)
      downloadTag.download = `sample.xlsx`
      downloadTag.click()
    } catch (error: any) {
      console.error(error.message)
    }
  };

  const handleOnAddFile = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (!e.target.files) return;
		setFiles([...files, ...e.target.files]);
  };

  const handleOnRemoveFile = (index: number) => {
    // 選択した画像は削除可能
		const newImages = [...files];
		newImages.splice(index, 1);
		setFiles(newImages);
  };

  return (
	<div>
		<h1 style={{textAlign: "center"}}>
			Lab効率化システム
		</h1>
		<form action="" style={{textAlign: "center"}} onSubmit={(e) => handleOnSubmit(e)}>
      	{/* 1つのボタンでテキストファイルを選択する */}
			<label htmlFor={inputId}>
				<Button
					variant="contained"
					component="span"
				>
					テキストファイル追加
				</Button>
				<input
					id={inputId}
					type="file"
					multiple
					accept="text/*"
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						handleOnAddFile(e)
					}
					style={{ display: "none" }}
				/>
			</label>
      {/* ファイルを選択したら選択中のすべてのファイルを表示 */}
			{files.map((file, i) => (
				<div
					key={i}
					style={{textAlign: "center"}}
				>
					<p>
						・Filename: {file.name}
						<IconButton
							style={{
								position: "sticky",
								top: 10,
								left: 10,
								color: "#aaa",
							}}
							onClick={() => handleOnRemoveFile(i)}
						>
							<CancelIcon />
						</IconButton>
					</p>
				</div>
			))}
		<br />
		<br />
		<Button
			variant="contained"
			type="submit"
			disableElevation
		>
			Excelファイルに変換・コピペ
		</Button>
		</form>
	</div>
  );
};

export default App;

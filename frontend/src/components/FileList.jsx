import styled from "styled-components";


const SButton = styled.button`
  margin-left: 16px;
`;
const SContainer = styled.div`
  border: solid 1px #ccc;
  padding: 16px;
  margin: 8px;
`;
const SMemoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const FileList = (props) => {
  const { files, onClickDelete } = props;
  console.log(files)

  const filesPath = files.map(file => <li key={file.path}>{file.path}</li>);

  return (
    <SContainer>
      <p>Display</p>
      <ul>
        {files.map((file, index) => (
          <li key={file}>
            <SMemoWrapper>
              <p>{files.path}</p>
              <SButton onClick={() => onClickDelete(index)}>Delete</SButton>
            </SMemoWrapper>
          </li>
        ))}
      </ul>
    </SContainer>
  );
};

export default FileList;

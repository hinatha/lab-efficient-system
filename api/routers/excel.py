from fastapi import APIRouter, UploadFile, File

import uploads.excel as excel_upload

router = APIRouter()

# Upload text file and return excel file.
@router.post("/excels")
async def upload_images(files: list[UploadFile] = File(...)):
    print("Execute")
    return await excel_upload.txt_to_xlsx(files)

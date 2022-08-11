import React, { useState } from 'react';
import { Container, Box, Button } from '@mui/material';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { ipfs } from '../helpers/ipfs';

const PUBLIC_GATEWAY_URL = 'https://gateway.pinata.cloud/ipfs/';

const FileUpload = () => {
  const [image, setImage] = useState(null);

  const handleUploadImage = async (event) => {
    const imgObject = event.target.files[0]
    imgObject.preview = URL.createObjectURL(event.target.files[0]);
    setImage(imgObject);
    try {
      const ipfsImage = await ipfs.add(imgObject);
      alert(`Image uploaded! Check image by accessing ${PUBLIC_GATEWAY_URL}${ipfsImage.path}`);
    } catch (e) {
      console.error(e);
    }

  };

  return (
    <Box sx={{
      backgroundColor: 'background.default',
      display: 'flex', flexDirection: 'column',
      minHeight: 'calc(100% - 64px)'
    }}>
      <Container style={{
        margin: 'auto auto'
      }}
        maxWidth="md"
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          px: {
            md: '130px !important'
          }
        }}>

        {image?.preview && (
          <div>
            <img className="preview my20" src={image?.preview} alt="" />
          </div>
        )}

        <input
          style={{ display: 'none' }}
          accept="image/*"
          id={`file-upload`}
          type="file"
          onChange={handleUploadImage}
        />
        <label htmlFor={`file-upload`}>
          <Button
            component="span"
            size="small"
            startIcon={<FileUploadIcon />}
            sx={{
              backgroundColor: "#00554E",
              color: "white",
              width: 200,
              height: 50,
              borderRadius: 5,
              margin: 5,
              ':hover': {
                bgcolor: 'black',
              },
            }}
          >
            Upload Image
          </Button>
        </label>

      </Container>
    </Box>
  )
}

export default FileUpload;

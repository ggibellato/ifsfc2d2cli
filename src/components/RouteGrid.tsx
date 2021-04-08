import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef } from '@material-ui/data-grid';

const API_URL = process.env.REACT_APP_API_URL;

const columns: GridColDef[] = [
    { field: 'title', headerName: 'Title', width: 200 },
    { field: 'startPosition', headerName: 'Start Position', width: 250 },
    { field: 'endPosition', headerName: 'End Position', width: 250 },
];

function RouteGrid() {
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch(`${API_URL}/routes`)
      .then((response) => response.json())
      .catch((error) => console.log(error))
      .then((data) => {
        if(data) {
          setRoutes(data.map((route:any, idx:number) => ({ 
            id: idx, 
            title: route.title, 
            startPosition: route.startPosition.lat + ' x ' + route.startPosition.lng, 
            endPosition: route.endPosition.lat + ' x ' + route.endPosition.lng, })));
        }
        else {
          setRoutes([]);
        }
      });
  }, []);  


  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={routes} columns={columns} />
    </div>
  );
}

export default RouteGrid;
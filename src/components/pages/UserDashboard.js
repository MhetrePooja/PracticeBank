import {Grid,Button,TextField ,Card, Tab,Tabs,Box, Alert} from '@mui/material';
import { useState } from 'react';
const UserDashboard = ()=>{
    const [amount,setAmount]=useState(0);

    return<>
    <h1>User Dashboard Page</h1>
    <Grid>
    <Grid item lg={5} sm={7} xs={12}>
           <Card sx={{width: '100%',height: '100%'}}>
               <Box sx={{borderTop: '1px solid'}}>
                   <Box sx={{borderBottom: '1px solid'}}>
                   <Tabs  textColor='primary' indicatorColor='primary'>
                           <Tab label="Change Password" sx={{textTransform: 'none' , fontWeight: 'bold'}}></Tab>
                           <Tab label="Profile Details" sx={{textTransform: 'none' , fontWeight: 'bold'}}></Tab>
                       </Tabs> 
                       <Button type='submit' varient='contained' sx={{ml:3,mt:3,mb:2,px:3,fontWeight:'bold',backgroundColor: 'blue', color:'black'}}> Logout</Button>
                </Box>
               </Box>
            </Card>
        </Grid>
    <Grid item lg={5} sm={7} xs={12}>
           <Card sx={{width: '100%',height: '100%'}}>
               <Box sx={{borderTop: '1px solid'}}>
                   <Box sx={{borderBottom: '1px solid'}}>
                           <Button  type='submit' varient='contained' sx={{mt:3,mb:2,px:3,fontWeight:'bold',backgroundColor: '#728FCE', color:'black'}}> Check Balance</Button>
                           <hr />
                           <TextField margin='normal'id='deposite' name='deposite' label='Deposite Amount' />
                           <Button  type='submit' varient='contained' sx={{ml:3,mt:3,mb:2,px:3,fontWeight:'bold',backgroundColor: 'green', color:'black'}}> Deposite</Button>
                           <hr/>
                           <TextField margin='normal' id='withdraw' name='withdraw' label='Withdraw Amount' />
                           <Button type='submit' varient='contained' sx={{ml:3,mt:3,mb:2,px:3,fontWeight:'bold',backgroundColor: 'red', color:'black'}}> Withdraw</Button>
                     </Box>
               </Box>
            </Card>
        </Grid>
        
    </Grid>
    
    </>
}
export default UserDashboard;
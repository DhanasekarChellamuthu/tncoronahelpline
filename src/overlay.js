import React, { Component } from 'react'
import {LayersControl,Marker,Popup,FeatureGroup} from 'react-leaflet'
// import { Confirmedcount } from './data/confirmed_cases'
import {PhychologistNumbers} from './data/phychologists'
import {NodalOfficier} from './data/nodalofficier'
import {EmergencyOffNum} from './data/emergencyOfficial'
import {TNMSCWarehouse} from './data/tnmscwarehouse'
import {/* iconPerson, */nodal,physiologist,emergency,tnmscwarehouse} from './Icons'

const {/* Overlay , */BaseLayer } = LayersControl



export default class Overlaycontrol extends Component<{}> {

    spiltlocal=(indata)=>{
        var localarray=indata.spiltingtext.toString()
        console.log(localarray)

        localarray=localarray.toString().split(',');
        const final_array_address=localarray.map((loc)=>{
            var LandlineorPhone ='+91'
            
            if (loc.startsWith('0')){
                LandlineorPhone=''
            }
             return (<li  key={loc}><a href={`tel:${LandlineorPhone} ${loc}`}>{loc} </a></li>)
             })
       
        return <ol>{final_array_address}</ol>

    }
    
    render() {

        //     const confirmed_cases=Confirmedcount.map((data)=>{
        //         return(
        //             <div key={data.District}>
        //             <Marker  position={[data.lat,data.lng]} icon={iconPerson}  >
        //                 <Popup >
        //                     <li> District Name: {data.District}</li>
        //                     <li>Confirmed Cases: {data.count} </li>         
        //                 </Popup>
        //             </Marker>
        //             </div>
        //             )
        //         }
        //    )

           const phychologistsnum=PhychologistNumbers.map((data)=>{
            return(
                <div key={data.District}>
                <Marker  position={[data.lat,data.lng]} icon={physiologist}  >
                    <Popup >
                        <li> District Name: {data.District}</li>
                        <li>Phone Number:<this.spiltlocal spiltingtext={data.helpline} /></li>

                    </Popup>
                </Marker>
                </div>
                )
            }
       )

        const nodalofficersnum=NodalOfficier.map((data)=>{
            return(
                <div key={data.District}>
                <Marker  position={[data.lat,data.lng]} icon={nodal}  >
                    <Popup >
                        <li> District Name: {data.District}</li>
                        <li>Phone Number: <this.spiltlocal spiltingtext={data["Nodal Officer"]} /></li>

                    </Popup>
                </Marker>
                </div>
                )
            }
         )
        const emergencynum=EmergencyOffNum.map((data)=>{
            return(
                <div key={data.District}>
                <Marker  position={[data.lat,data.lng]} icon={emergency}  >
                    <Popup >
                        <li> District Name: {data.District}</li>
                        <li>Phone Number: <this.spiltlocal spiltingtext={data["Emergency Official"]} /></li>
                        </Popup>
                </Marker>
                </div>
                )
            }
        )

        const tnmscwarehousenum=TNMSCWarehouse.map((data)=>{
            return(
                <div key={data.District}>
                <Marker  position={[data.lat,data.lng]} icon={tnmscwarehouse}  >
                    <Popup >
                        <li> District Name: {data.District}</li>
                        <li>Phone Number: <this.spiltlocal spiltingtext={data["TNMSC WareHouse"]} /></li>

                    </Popup>
                </Marker>
                </div>
                )
            }
        )
    
    


      return (
          <LayersControl position="topright">
                {/* <BaseLayer  checked name="Confirmed cases">
                    <FeatureGroup>
                             {confirmed_cases}
                    </FeatureGroup>
                </BaseLayer> */}
               
                <BaseLayer checked name="Phychologists Numbers">
                    <FeatureGroup>
                             {phychologistsnum}
                    </FeatureGroup>
                </BaseLayer>
                <BaseLayer name="Nodal Office Numbers">
                    <FeatureGroup>
                             {nodalofficersnum}
                    </FeatureGroup>
                </BaseLayer>
                <BaseLayer name="Emergency Official Numbers">
                    <FeatureGroup>
                             {emergencynum}
                    </FeatureGroup>
                </BaseLayer> 
                <BaseLayer name="TNMSC warehose Numbers">
                    <FeatureGroup>
                             {tnmscwarehousenum}
                    </FeatureGroup>
                </BaseLayer> 
                
              
          </LayersControl>
      )
    }
  }
import { Label, FileInput, TextInput, Button, Select } from "flowbite-react";
import { useState } from "react";

import axios from "axios";


const AddEvents = () => {



    const [error, setError] = useState("");
    const [thumbnail, setThumbnail] = useState();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    //const [organizedBY, setOrganizedBY] = useState("");
    const [eventCategory, setEventCategory] = useState(""); // use multiple select
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("")
  //  const [date, setDate] = useState("");
    const [state, setState] = useState("");
    const [city, setCity] = useState("");
    const [mode, setModes] = useState("");



    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('====================================');
        console.log(title);
        console.log(description);
        console.log(startTime);
        console.log(endTime);
        console.log(city);
        console.log(state);
        console.log(mode);
        //console.log(date);
        console.log(eventCategory);
        console.log(thumbnail);
        //console.log(organizedBY);
      //  console.log(thumbnail);
        console.log('====================================');


    
            setError('Loading.........')
            const formData = new FormData();
            formData.append('thumbnail', thumbnail);
            formData.append('title', title);
            formData.append('description', description);
           // formData.append('organizedBy', organizedBy);
            formData.append('eventsCategory', eventCategory);
            formData.append('date', date);
            formData.append('startTime', startTime);
            formData.append('endTime', endTime);
            formData.append('country', 'India');
            formData.append('mode', mode);
            formData.append('state', state);
            formData.append('city', city);


            //formData.append('companyname', companyName);


            const config = {
                headers: {
                  'content-type': 'multipart/form-data',
                },
              };
          
              await axios.post("http://localhost:3000/api/events/addNewEvent", formData, config).then((response) => {
                console.log(response);
              }).catch((error) => {
                console.log(error);
              })
            }
    


    return (
        <>
            <div className="w-[100%] flex flex-col items-center py-12">
                <h1 className="text-3xl font-bold mb-4">Add Events Here !</h1>
                {error && <div className="text-red-500 mb-4">{error}</div>}
                <form className="w-[100%] flex flex-col items-center py-12" onSubmit={handleSubmit}>
                    {/* upload file - thumbnail*/}
                    <div className="mb-4 w-3/5">
                        <div>
                            <Label htmlFor="thumbnail" value="Upload Event Thumbnail" />
                        </div>
                        <FileInput id="thumbnail" sizing="lg" onChange={(e) => setThumbnail(e.target.files[0])} />
                    </div>

                    {/* title */}
                    <div className="w-3/5 mb-4">
                        <div className="mb-2 block">
                            <Label htmlFor="title" value="Title " />
                        </div>
                        <TextInput id="title " type="text" placeholder=" Title of Event" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>


                    {/* Description*/}
                    <div className="w-3/5 mb-4">
                        <div className="mb-2 block">
                            <Label htmlFor="description " value="Description  " />
                        </div>
                        <TextInput id="description " type="text" placeholder="Description " value={description} onChange={(e) => setDescription(e.target.value)} />
                    </div>


                    {/*  organizedBY */}
                    {/* <div className="w-3/5 mb-4">
                        <div className="mb-2 block">
                            <Label htmlFor="organizedBY" value="Event Organized BY" />
                        </div>
                        <TextInput id="organizedBY" type="text" placeholder="Organized BY" value={organizedBY} onChange={(e) => setOrganizedBY(e.target.value)} />
                    </div> */}

                    {/* Event category */}
                    <div className="w-3/5 mb-4">
                        <div className="mb-2 block">
                            <Label htmlFor="eventcategory" value="Event Category " />
                        </div>
                        <TextInput id="eventcategory" type="text" placeholder="Category" required value={eventCategory} onChange={(e) => setEventCategory(e.target.value)} />
                    </div>

                    {/* startTime */}
                    <div className="w-3/5 mb-4">
                        <div className="mb-2 block">
                            <Label htmlFor="startTime" value="Event Start Time " />
                        </div>
                        <TextInput id="startTime" type="datetime-local" placeholder="Start- Time" required value={startTime} onChange={(e) => setStartTime(e.target.value)} />
                    </div>

                    {/* endTime  */}
                    <div className="w-3/5 mb-4">
                        <div className="mb-2 block">
                            <Label htmlFor="endTime" value="Event End Time " />
                        </div>
                        <TextInput id="endTime" type="datetime-local" placeholder="End-Time" required value={endTime} onChange={(e) => setEndTime(e.target.value)} />
                    </div>

                    {/* date */}
                    {/* <div className="w-3/5 mb-4">
                        <div className="mb-2 block">
                            <Label htmlFor="date" value="Date of Event" />
                        </div>
                        <TextInput id="date" type="date" placeholder="" required value={date} onChange={(e) => setDate(e.target.value)} />
                    </div> */}

                    {/* country */}
                    <div className="w-3/5 mb-4">
                        <div className="mb-2 block">
                        <Label htmlFor="Country" value="Country" />

                        </div>
                                  <TextInput id="Country" type="text" placeholder="India" disabled />

                    </div>

                    {/* state */}
                    <div className="w-3/5 mb-4">
                        <div className="mb-2 block">
                         <Label htmlFor="states" value="Select your state" />
                        </div>
                                  <Select id="states" onChange={(e) => setState(e.target.value)} required>
            <option>Andhra Pradesh</option>
            <option>Arunachal Pradesh</option>
            <option>Assam</option>
            <option>Bihar</option>
            <option>Chhattisgarh</option>
            <option>Goa</option>
            <option>Gujarat</option>
            <option>Haryana</option>
            <option>Himachal Pradesh</option>
            <option>Jharkhand</option>
            <option>Karnataka</option>
            <option>Kerala</option>
            <option>Madhya Pradesh</option>
            <option>Maharashtra</option>
            <option>Manipur</option>
            <option>Meghalaya</option>
            <option>Mizoram</option>
            <option>Nagaland</option>
            <option>Odisha</option>
            <option>Punjab</option>
            <option>Rajasthan</option>
            <option>Sikkim</option>
            <option>Tamil Nadu</option>
            <option>Telangana</option>
            <option>Tripura</option>
            <option>Uttarakhand</option>
            <option>Uttar Pradesh</option>
            <option>West Bengal</option>


          </Select>
                    </div>


                      {/* city */}
                      <div className="w-3/5 mb-4">
                        <div className="mb-2 block">
                         <Label htmlFor="city" value="Select your city" />
                        </div>
                        <TextInput id="city" type="text" placeholder="Enter your city" onChange={(e) => setCity(e.target.value)} required />

                    </div>

                    {/* mode  */}
                    <div className="w-3/5 mb-4">
                        <div className="mb-2 block">
                        <Label htmlFor="mode" value="Select Mode" />
                        </div>
                        <Select id="mode" onChange={(e) => setModes(e.target.value)} required>
            <option>Online</option>
            <option>Offline</option>
            <option>In-Person</option>
          </Select>

                    </div>


                    

                    {/* Submit Button */}
                    <div className="w-3/5">
                        <Button gradientDuoTone="purpleToPink" type="submit"  >
                            Register
                        </Button>
                    </div>

                </form>
            </div>

        </>
    );
};

export { AddEvents };
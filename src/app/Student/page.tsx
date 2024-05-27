"use client";
import React, { useState, useEffect } from "react";
import { IoMdHome, IoMdNotificationsOutline } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
import Notification from "./Components/Notification/Notification";
import Link from "next/link";
import Bsc_SE from "./table";
import Bsc_CS from "./table";
import BBIT from "./table";
import { BsFileEarmarkText } from "react-icons/bs";
import dr_Njeri from "../../../public/dr_Njeri.jpg";
import lec1 from "../../../public/lec1.webp";
import lec2 from "../../../public/lec2.webp";
import lec3 from "../../../public/lec3.webp";
import lec4 from "../../../public/lec4.webp";
import Image from "next/image";
import axios from "axios";
import toast from "react-hot-toast";
import {useRouter} from "next/navigation";

const Bsc_IT = [
  {
    Y1S2: {
      Mon: {
        morning: {
          date_name: "Mon",
          course_name: "BSc IT",
          unit: "No Unit",
          time: "0700hrs-1000hrs",
          venue: "No Venue",
          img: dr_Njeri,
          lec: "None",
        },
        mid_morning: {
          date_name: "Mon",
          course_name: "BSc IT",
          unit: "No Unit",
          time: "1000hrs-1300hrs",
          venue: "No Venue",
          img: dr_Njeri,
          lec: "None",
        },
        evening: {
          date_name: "Mon",
          course_name: "BSc IT",
          unit: "BCE 101",
          time: "1300hrs-1600hrs",
          venue: "F3.1",
          img: dr_Njeri,
          lec: "Nyagisera",
        },
        late_evening: {
          date_name: "Mon",
          course_name: "BSc IT",
          unit: "No Unit",
          time: "1600hrs-1900hrs",
          venue: "No Venue",
          img: dr_Njeri,
          lec: "None",
        },
      },
      Tue: {
        morning: {
          date_name: "Tue",
          course_name: "BSc IT",
          unit: "No Unit",
          time: "0700hrs-1000hrs",
          venue: "No Venue",
          img: lec1,
          lec: "None",
        },
        mid_morning: {
          date_name: "Tue",
          course_name: "BSc IT",
          unit: "UCU 102",
          time: "1000hrs-1300hrs",
          venue: "Online",
          img: lec1,
          lec: "Sarah",
        },
        evening: {
          date_name: "Tue",
          course_name: "BSc IT",
          unit: "SIT 104",
          time: "1300hrs-1600hrs",
          venue: "F2.2",
          img: lec2,
          lec: "Juliet",
        },
        late_evening: {
          date_name: "Mon",
          course_name: "BSc IT",
          unit: "No Unit",
          time: "1600hrs-1900hrs",
          venue: "No Venue",
          img: dr_Njeri,
          lec: "None",
        },
      },
      Wed: {
        morning: {
          date_name: "Wed",
          course_name: "BSc IT",
          unit: "No Unit",
          time: "0700hrs-1000hrs",
          venue: "No Venue",
          img: dr_Njeri,
          lec: "None",
        },
        mid_morning: {
          date_name: "wed",
          course_name: "BSc IT",
          unit: "No Unit",
          time: "1000hrs-1300hrs",
          venue: "No Venue",
          img: dr_Njeri,
          lec: "None",
        },
        evening: {
          date_name: "Wed",
          course_name: "BSc IT",
          unit: "BCE 101",
          time: "1300hrs-1600hrs",
          venue: "F3.1",
          img: dr_Njeri,
          lec: "Nyagisera",
        },
        late_evening: {
          date_name: "Wed",
          course_name: "BSc IT",
          unit: "No Unit",
          time: "1600hrs-1900hrs",
          venue: "No Venue",
          img: lec4,
          lec: "Agina",
        },
      },
      Thur: {
        morning: {
          date_name: "Thur",
          course_name: "BSc IT",
          unit: "SIT 103",
          time: "0700hrs-1000hrs",
          venue: "F3 Lab",
          img: lec1,
          lec: "J.Kimiri",
        },
        mid_morning: {
          date_name: "Thur",
          course_name: "BSc IT",
          unit: "No Unit",
          time: "1000hrs-1300hrs",
          venue: "No Venue",
          img: lec1,
          lec: "None",
        },
        evening: {
          date_name: "Thur",
          course_name: "BSc IT",
          unit: "No Unit",
          time: "1300hrs-1600hrs",
          venue: "No Venue",
          img: lec2,
          lec: "None",
        },
        late_evening: {
          date_name: "Thur",
          course_name: "BSc IT",
          unit: "No Unit",
          time: "1600hrs-1900hrs",
          venue: "No Venue",
          img: lec4,
          lec: "None",
        },
      },
      Fri: {
        morning: {
          date_name: "Fri",
          course_name: "BSc IT",
          unit: "No Unit",
          time: "0700hrs-1000hrs",
          venue: "No Venue",
          img: lec1,
          lec: "None",
        },
        mid_morning: {
          date_name: "Fri",
          course_name: "BSc IT",
          unit: "SIT 105",
          time: "1000hrs-1300hrs",
          venue: "F4 Lab",
          img: lec1,
          lec: "G. Muturi",
        },
        evening: {
          date_name: "Fri",
          course_name: "BSc IT",
          unit: "No Unit",
          time: "1300hrs-1600hrs",
          venue: "No Venue",
          img: lec2,
          lec: "None",
        },
        late_evening: {
          date_name: "Fri",
          course_name: "BSc IT",
          unit: "No Unit",
          time: "1600hrs-1900hrs",
          venue: "No Venue",
          img: lec4,
          lec: "None",
        },
      },
    },
    Y2S2: {
      Mon: {
        morning: {
          date_name: "Mon",
          course_name: "BSc IT",
          unit: "SIT 203",
          time: "0700hrs-1000hrs",
          venue: "F3.3",
          img: lec3,
          lec: "P.Kimemiah",
        },
        mid_morning: {
          date_name: "Mon",
          course_name: "BSc IT",
          unit: "No Unit",
          time: "1000hrs-1300hrs",
          venue: "No Venue",
          img: dr_Njeri,
          lec: "None",
        },
        evening: {
          date_name: "Mon",
          course_name: "BSc IT",
          unit: "No Unit",
          time: "1300hrs-1600hrs",
          venue: "No Venue",
          img: dr_Njeri,
          lec: "None",
        },
        late_evening: {
          date_name: "Mon",
          course_name: "BSc IT",
          unit: "No Unit",
          time: "1600hrs-1900hrs",
          venue: "No Venue",
          img: dr_Njeri,
          lec: "None",
        },
      },
      Tue: {
        morning: {
          date_name: "Tue",
          course_name: "BSc IT",
          unit: "BCA 211/BCA 200",
          time: "0700hrs-1000hrs",
          venue: "F4.1,F4.2",
          img: lec1,
          lec: "Dr. R. Mwende",
        },
        mid_morning: {
          date_name: "Tue",
          course_name: "BSc IT",
          unit: "EET 215",
          time: "1000hrs-1300hrs",
          venue: "DH4A",
          img: lec1,
          lec: "Gordon",
        },
        evening: {
          date_name: "Tue",
          course_name: "BSc IT",
          unit: "SIT 204",
          time: "1300hrs-1600hrs",
          venue: "G4 Lab",
          img: lec2,
          lec: "Dr. G. Mariga",
        },
        late_evening: {
          date_name: "Mon",
          course_name: "BSc IT",
          unit: "No Unit",
          time: "1600hrs-1900hrs",
          venue: "No Venue",
          img: dr_Njeri,
          lec: "None",
        },
      },
      Wed: {
        morning: {
          date_name: "Wed",
          course_name: "BSc IT",
          unit: "SIT 202",
          time: "0700hrs-1000hrs",
          venue: "F3.1",
          img: dr_Njeri,
          lec: "Dr. R. Ndung'u",
        },
        mid_morning: {
          date_name: "wed",
          course_name: "BSc IT",
          unit: "No Unit",
          time: "1000hrs-1300hrs",
          venue: "No Venue",
          img: dr_Njeri,
          lec: "None",
        },
        evening: {
          date_name: "Wed",
          course_name: "BSc IT",
          unit: "No Unit",
          time: "1300hrs-1600hrs",
          venue: "No venue",
          img: dr_Njeri,
          lec: "None",
        },
        late_evening: {
          date_name: "Wed",
          course_name: "BSc IT",
          unit: "No Unit",
          time: "1600hrs-1900hrs",
          venue: "No Venue",
          img: lec4,
          lec: "None",
        },
      },
      Thur: {
        morning: {
          date_name: "Thur",
          course_name: "BSc IT",
          unit: "No Unit",
          time: "0700hrs-1000hrs",
          venue: "No Venue",
          img: lec1,
          lec: "None",
        },
        mid_morning: {
          date_name: "Thur",
          course_name: "BSc IT",
          unit: "SCS 205",
          time: "1000hrs-1300hrs",
          venue: "DH3A",
          img: lec1,
          lec: "Knight",
        },
        evening: {
          date_name: "Thur",
          course_name: "BSc IT",
          unit: "No Unit",
          time: "1300hrs-1600hrs",
          venue: "No Venue",
          img: lec2,
          lec: "None",
        },
        late_evening: {
          date_name: "Thur",
          course_name: "BSc IT",
          unit: "No Unit",
          time: "1600hrs-1900hrs",
          venue: "No Venue",
          img: lec4,
          lec: "None",
        },
      },
      Fri: {
        morning: {
          date_name: "Fri",
          course_name: "BSc IT",
          unit: "No Unit",
          time: "0700hrs-1000hrs",
          venue: "No Venue",
          img: lec1,
          lec: "None",
        },
        mid_morning: {
          date_name: "Fri",
          course_name: "BSc IT",
          unit: "No Unit",
          time: "1000hrs-1300hrs",
          venue: "No Venue",
          img: lec1,
          lec: "None",
        },
        evening: {
          date_name: "Fri",
          course_name: "BSc IT",
          unit: "SCS 203",
          time: "1300hrs-1600hrs",
          venue: "MLH2",
          img: lec2,
          lec: "Mutembei",
        },
        late_evening: {
          date_name: "Fri",
          course_name: "BSc IT",
          unit: "No Unit",
          time: "1600hrs-1900hrs",
          venue: "No Venue",
          img: lec4,
          lec: "None",
        },
      },
    },
    Y3S2: {
      Mon: {
        morning: {
          date_name: "Mon",
          course_name: "BSc IT",
          unit: "No Unit",
          time: "0700hrs-1000hrs",
          venue: "No Venue",
          img: dr_Njeri,
          lec: "None",
        },
        mid_morning: {
          date_name: "Mon",
          course_name: "BSc IT",
          unit: "No Unit",
          time: "1000hrs-1300hrs",
          venue: "No Venue",
          img: lec4,
          lec: "None",
        },
        evening: {
          date_name: "Mon",
          course_name: "BSc IT",
          unit: "No Unit",
          time: "1300hrs-1600hrs",
          venue: "No Venue",
          img: lec1,
          lec: "None",
        },
        late_evening: {
          date_name: "Mon",
          course_name: "BSc IT",
          unit: "No Unit",
          time: "1600hrs-1900hrs",
          venue: "No Venue",
          img: dr_Njeri,
          lec: "None",
        },
      },
      Tue: {
        morning: {
          date_name: "Tue",
          course_name: "BSc IT",
          unit: "No Unit",
          time: "0700hrs-1000hrs",
          venue: "No Venue",
          img: lec1,
          lec: "None",
        },
        mid_morning: {
          date_name: "Tue",
          course_name: "BSc IT",
          unit: "No Unit",
          time: "1000hrs-1300hrs",
          venue: "No Venue",
          img: lec1,
          lec: "None",
        },
        evening: {
          date_name: "Tue",
          course_name: "BSc IT",
          unit: "No Unit",
          time: "1300hrs-1600hrs",
          venue: "No Venue",
          img: lec2,
          lec: "None",
        },
        late_evening: {
          date_name: "Tue",
          course_name: "BSc IT",
          unit: "SCS 301",
          time: "1600hrs-1900hrs",
          venue: "GF2",
          img: dr_Njeri,
          lec: "Nekesa",
        },
      },
      Wed: {
        morning: {
          date_name: "Wed",
          course_name: "BSc IT",
          unit: "SIT 304",
          time: "0700hrs-1000hrs",
          venue: "GF4 Lab",
          img: dr_Njeri,
          lec: "Juliet",
        },
        mid_morning: {
          date_name: "wed",
          course_name: "BSc IT",
          unit: "No Unit",
          time: "1000hrs-1300hrs",
          venue: "No Venue",
          img: dr_Njeri,
          lec: "None",
        },
        evening: {
          date_name: "Wed",
          course_name: "BSc IT",
          unit: "No Unit",
          time: "1300hrs-1600hrs",
          venue: "No Venue",
          img: dr_Njeri,
          lec: "None",
        },
        late_evening: {
          date_name: "Wed",
          course_name: "BSc IT",
          unit: "No Unit",
          time: "1600hrs-1900hrs",
          venue: "No Venue",
          img: lec4,
          lec: "None",
        },
      },
      Thur: {
        morning: {
          date_name: "Thur",
          course_name: "BSc IT",
          unit: "SCS 302",
          time: "0700hrs-1000hrs",
          venue: "GF3",
          img: lec1,
          lec: "S.Karanja",
        },
        mid_morning: {
          date_name: "Thur",
          course_name: "BSc IT",
          unit: "No Unit",
          time: "1000hrs-1300hrs",
          venue: "No Venue",
          img: lec1,
          lec: "None",
        },
        evening: {
          date_name: "Thur",
          course_name: "BSc IT",
          unit: "SCS 303",
          time: "1300hrs-1600hrs",
          venue: "GF3",
          img: lec2,
          lec: "Knight",
        },
        late_evening: {
          date_name: "Thur",
          course_name: "BSc IT",
          unit: "SIT 306",
          time: "1600hrs-1900hrs",
          venue: "F1.2",
          img: lec4,
          lec: "Agina",
        },
      },
      Fri: {
        morning: {
          date_name: "Fri",
          course_name: "BSc IT",
          unit: "SCIT 305",
          time: "0700hrs-1000hrs",
          venue: "F2.2",
          img: lec1,
          lec: "C.Kiarie",
        },
        mid_morning: {
          date_name: "Fri",
          course_name: "BSc IT",
          unit: "No Unit",
          time: "1000hrs-1300hrs",
          venue: "No Venue",
          img: lec1,
          lec: "None",
        },
        evening: {
          date_name: "Fri",
          course_name: "BSc IT",
          unit: "No Unit",
          time: "1300hrs-1600hrs",
          venue: "No Venue",
          img: lec2,
          lec: "None",
        },
        late_evening: {
          date_name: "Fri",
          course_name: "BSc IT",
          unit: "No Unit",
          time: "1600hrs-1900hrs",
          venue: "No Venue",
          img: lec4,
          lec: "None",
        },
      },
    },
    Y4S2: {
      Mon: {
        morning: {
          date_name: "Mon",
          course_name: "BSc IT",
          unit: "No Unit",
          time: "0700hrs-1000hrs",
          venue: "No Venue",
          img: lec1,
          lec: "None",
        },
        mid_morning: {
          date_name: "Mon",
          course_name: "BSc IT",
          unit: "No Unit",
          time: "1000hrs-1300hrs",
          venue: "No Venue",
          img: lec3,
          lec: "None",
        },
        evening: {
          date_name: "Mon",
          course_name: "BSc IT",
          unit: "No Unit",
          time: "1300hrs-1600hrs",
          venue: "No Venue",
          img: dr_Njeri,
          lec: "None",
        },
        late_evening: {
          date_name: "Mon",
          course_name: "BSc IT",
          unit: "No Unit",
          time: "1600hrs-1900hrs",
          venue: "No Venue",
          img: dr_Njeri,
          lec: "None",
        },
      },
      Tue: {
        morning: {
          date_name: "Tue",
          course_name: "BSc IT",
          unit: "No Unit",
          time: "0700hrs-1000hrs",
          venue: "No Venue",
          img: lec1,
          lec: "None",
        },
        mid_morning: {
          date_name: "Tue",
          course_name: "BSc IT",
          unit: "SCS 422",
          time: "1000hrs-1300hrs",
          venue: "GF4",
          img: lec4,
          lec: "Dr. G. Mariga",
        },
        evening: {
          date_name: "Tue",
          course_name: "BSc IT",
          unit: "SIT 408",
          time: "1300hrs-1600hrs",
          venue: "DH3B",
          img: lec2,
          lec: "S.Kigotho",
        },
        late_evening: {
          date_name: "Mon",
          course_name: "BSc IT",
          unit: "SIT 406",
          time: "1600hrs-1900hrs",
          venue: "F2.4",
          img: dr_Njeri,
          lec: "Agina",
        },
      },
      Wed: {
        morning: {
          date_name: "Wed",
          course_name: "BSc IT",
          unit: "No Unit",
          time: "0700hrs-1000hrs",
          venue: "No Venue",
          img: dr_Njeri,
          lec: "None",
        },
        mid_morning: {
          date_name: "wed",
          course_name: "BSc IT",
          unit: "No Unit",
          time: "1000hrs-1300hrs",
          venue: "No Venue",
          img: dr_Njeri,
          lec: "None",
        },
        evening: {
          date_name: "Wed",
          course_name: "BSc IT",
          unit: "No Unit",
          time: "1300hrs-1600hrs",
          venue: "No Venue",
          img: lec2,
          lec: "None",
        },
        late_evening: {
          date_name: "Wed",
          course_name: "BSc IT",
          unit: "No Unit",
          time: "1600hrs-1900hrs",
          venue: "No Venue",
          img: lec4,
          lec: "None"
        },
      },
      Thur: {
        morning: {
          date_name: "Thur",
          course_name: "BSc IT",
          unit: "SCS 414",
          time: "0700hrs-1000hrs",
          venue: "F3.1",
          img: lec1,
          lec: "Knight",
        },
        mid_morning: {
          date_name: "Thur",
          course_name: "BSc IT",
          unit: "SIT 405",
          time: "1000hrs-1300hrs",
          venue: "F3.3",
          img: lec1,
          lec: "P.Bitok",
        },
        evening: {
          date_name: "Thur",
          course_name: "BSc IT",
          unit: "SIT 405",
          time: "1300hrs-1600hrs",
          venue: "F3.3",
          img: lec2,
          lec: "Dr. J. Njuki",
        },
        late_evening: {
          date_name: "Thur",
          course_name: "BSc IT",
          unit: "No Unit",
          time: "1600hrs-1900hrs",
          venue: "No Venue",
          img: lec4,
          lec: "None",
        },
      },
      Fri: {
        morning: {
          date_name: "Fri",
          course_name: "BSc IT",
          unit: "No Unit",
          time: "0700hrs-1000hrs",
          venue: "No Venue",
          img: lec1,
          lec: "None",
        },
        mid_morning: {
          date_name: "Fri",
          course_name: "BSc IT",
          unit: "No Unit",
          time: "1000hrs-1300hrs",
          venue: "No Venue",
          img: lec1,
          lec: "None",
        },
        evening: {
          date_name: "Fri",
          course_name: "BSc IT",
          unit: "No Unit",
          time: "1300hrs-1600hrs",
          venue: "No Venue",
          img: lec2,
          lec: "None",
        },
        late_evening: {
          date_name: "Fri",
          course_name: "BSc IT",
          unit: "No Unit",
          time: "1600hrs-1900hrs",
          venue: "No Venue",
          img: lec4,
          lec: "None",
        },
      },
    }
  }
]



const Student = () => {
  const router = useRouter()
  const [selectedCourse, setSelectedCourse] = useState("BSc IT");
  const [selectedYear, setSelectedYear] = useState("Y1S2");
  const [showNotification, setShowNotification] = useState(false);
  // const [currentTimeOfDay, setCurrentTimeOfDay] = useState("");
  const [selectedTimetable, setSelectedTimetable] = useState([]);
  const [currentTimeOfDay, setCurrentTimeOfDay] = useState<string>("");
  const [registrationNumber, setRegistrationNumber] = useState('');


  const timesOfDay = ['morning', 'mid_morning', 'evening', 'late_evening'];

  const [selectedItems, setSelectedItems] = useState<Array<string | null>>(Array(timesOfDay.length).fill(null));

  const courseOptions = {
    "BSc IT": Bsc_IT,
  };
  const yearOptions = ["Y1S2", "Y2S2", "Y3S2", "Y4S2"];


  function getBScITContent(year) {
    // Assuming year is a string like 'Y1S2', 'Y2S2', etc.
    const courses = Bsc_IT.find(course => course[year]);

    if (!courses) {
      return null; 
    }

    return courses[year];
  }

  const content = getBScITContent(selectedYear);



  const handleUpdateTimeOfDay = () => {
    const currentHour = new Date().getHours();
    let timeOfDay;

    if (currentHour < 10) {
      timeOfDay = "morning";
    } else if (currentHour < 13) {
      timeOfDay = "mid_morning";
    } else if (currentHour < 16) {
      timeOfDay = "evening";
    } else {
      timeOfDay = "late_evening";
    }

    setCurrentTimeOfDay(timeOfDay);
  };

  function getCurrentDayLesson(_params) {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
    const currentDate = new Date();
    const currentDay = daysOfWeek[currentDate.getDay()];

    let currentSchedule = null;
    for (const year of Bsc_IT) {
        for (const dayOfWeek in year) {
            if (dayOfWeek === currentDay) {
                currentSchedule = year[dayOfWeek];
                break;
            }
        }
        if (currentSchedule) {
            break;
        }
    }

    if (currentSchedule) {
        const lesson = Object.values(currentSchedule).find(lesson => lesson.unit !== "No Unit");
        if (lesson) {
            const { img, unit, venue } = lesson;
            return { img, unit, venue };
        }
    }

    return "None";
}

  useEffect(() => {
    const interval = setInterval(handleUpdateTimeOfDay, 60000);
    const selectedTimetable = setSelectedTimetable(getBScITContent(selectedYear));
    const notify = getCurrentDayLesson(selectedTimetable)

    console.log(notify)

    const getUserDetails = async () => {
      try {
          const res = await axios.get('/api/users/me');
          setRegistrationNumber(res.data.data.registrationNumber);
      } catch (error) {
          console.error(error);
      }
  };

  getUserDetails();
    return () => clearInterval(interval);
  }, [selectedCourse, selectedYear]);

  const getCurrentDay = () => {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday',];
    const currentDate = new Date();
    const currentDayIndex = currentDate.getDay(); // 0 for Sunday, 1 for Monday, ..., 6 for Saturday
    return days[currentDayIndex];
  };

  const getCurrentTime = () => {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    const currentMinutes = currentDate.getMinutes();
    const currentTime = `${currentHour}:${currentMinutes}`;
    return currentTime;
  };


  const handleItemClick = (index: number, timeOfDay: string) => {
    const currentDay = getCurrentDay();
    const currentTime = getCurrentTime();

    if (!selectedTimetable[currentDay]) {
      return; 
    }

    const currentItem = selectedTimetable[currentDay][currentTime];
    const newSelectedItems = timesOfDay.map(() => null); 
    newSelectedItems[index] = currentItem ? currentItem : null;
    setSelectedItems(newSelectedItems);
    setCurrentTimeOfDay(timeOfDay);
  };

  const logout = async () => {
    try {
      await axios.get('/api/users/logout')
      toast.success('Logout successful')
      router.push('/login')
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message)
    }
  }

  



  return (
    <main className="flex flex-col justify-center place-items-center items-center mx-auto w-full overflow-x-hidden">
      <nav className="py-6 flex justify-between place-items-center  items-center mx-auto relative  w-[100vw] shadow-lg">
        <div className="flex items-center w-[80%] mx-auto justify-around">
          <Link className="bg-[#313131] border border-gray-700 p-1 rounded-lg flex justify-center items-center" href="/">
            <div className="flex items-center">
              <IoMdHome className="relative w-5 h-5 ml-1 mr-1 text-slate-300" />
              <span className=" text-base text-slate-300">Home</span>
            </div>
          </Link>

          <div className="flex items-center">
            <select
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
              className="border border-gray-700 bg-[#313131] rounded-lg px-2 py-1 mr-2"
            >
              {Object.keys(courseOptions).map((course) => (
                <option key={course} value={course}>
                  {course}
                </option>
              ))}
            </select>

            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="border border-gray-700 bg-[#313131] rounded-lg px-3 py-1"
            >
              {yearOptions.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
          <div>
            <button
              className="bg-[#313131] border border-gray-700 p-1 rounded-lg w-7 h-7 flex justify-center items-center relative"
              onClick={() => setShowNotification(!showNotification)}
            >
              <IoMdNotificationsOutline className="relative w-6 h-6 text-slate-300" />
              {showNotification ? (
                <div className="absolute bg-green-400 w-3 h-3 rounded-full top-[-3px] ml-5"></div>
              ) : null}
            </button>
            {showNotification ? null : <Notification />}
          </div>

          <div>
            <button className="bg-[#313131] border border-gray-700 p-1 rounded-lg flex justify-center items-center">
              <BsFileEarmarkText className="relative text-lg ml-1 mr-1 text-slate-300" />
              <span className=" mr-1 text-base text-slate-300">
              {registrationNumber}
              </span>
            </button>
          </div>
          <div>
            <button className="bg-red-500 border border-red-500 p-1 rounded-lg flex justify-center items-center" onClick={logout}>
              <IoIosLogOut className="relative text-lg ml-1 mr-1 text-slate-100" />
              <span className=" mr-1 text-base text-slate-100">
                LogOut
              </span>
            </button>
          </div>
        </div>
      </nav>
      <section className="grid my-6 gap-x-0 items-center place-items-center justify-center overflow-x-hidden mx-auto w-full grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {selectedTimetable && Object.keys(selectedTimetable).map((day, dayIndex) => (
          <div key={dayIndex} className="flex flex-col justify-center mx-auto place-items-center items-center border border-gray-700 bg-stone-800 rounded-lg w-[80%]">

            {selectedTimetable[day][currentTimeOfDay] && (
              <>
                <div className="flex items-center justify-between p-3 bg-stone-900 w-full rounded-t-lg">
                  <h2 className="text-xl font-bold">{day}</h2>
                  <span className="font-semibold text-base text-slate-200">{selectedTimetable[day][currentTimeOfDay].course_name}</span>
                </div>
                <div className="flex flex-col justify-center mx-auto w-full p-3 ">

                  <div className="flex items-center my-2">
                    <label htmlFor="" className="text-slate-200 text-base">
                      Unit:
                    </label>
                    <span className="font-bold text-base ml-3">{selectedTimetable[day][currentTimeOfDay].unit}</span>
                  </div>
                  <div className="flex items-center my-2">
                    <label htmlFor="" className="text-slate-200 text-base">
                      Time:
                    </label>
                    <span className="font-bold text-base ml-3">{selectedTimetable[day][currentTimeOfDay].time}</span>
                  </div>
                  <div className="flex items-center my-2">
                    <label htmlFor="" className="text-slate-200 text-base">
                      Venue:
                    </label>
                    <span className="font-bold text-base ml-3">{selectedTimetable[day][currentTimeOfDay].venue}</span>
                  </div>
                  <div className="flex items-center my-2">
                    <label htmlFor="" className="text-slate-200 text-base">
                      Lecturer:
                    </label>
                    <span className="font-bold text-base ml-3">{selectedTimetable[day][currentTimeOfDay].lec}</span>
                  </div>
                  <div className="flex mx-auto w-full py-3 items-center">
                    <Image
                      alt={selectedTimetable[day][currentTimeOfDay].lec}
                      src={selectedTimetable[day][currentTimeOfDay].img}
                      className="w-8 h-7 object-cover rounded-full"
                    />
                    <span className="font-semibold text-base ml-3">
                      {selectedTimetable[day][currentTimeOfDay].lec}
                    </span>
                  </div>
                  <div className="flex justify-center mx-auto w-full p-3 items-center">
                    {timesOfDay.map((time, index) => (
                      <div
                        key={time}
                        onClick={() => handleItemClick(index, time)}
                        className={`bg-slate-50 w-3 h-3 rounded-full mx-1 cursor-pointer ${currentTimeOfDay === time ? "opacity-100" : "opacity-50"
                          }`}
                      ></div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </section>


    </main>
  );
};

export default Student;

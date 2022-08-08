import { FiInbox } from "react-icons/fi";
import { FaTelegramPlane ,FaLessThan,FaSnapchatSquare} from "react-icons/fa";
import { AiOutlineStar,AiFillSchedule ,AiOutlineFall} from "react-icons/ai";
import { BiAlarmSnooze } from "react-icons/bi";
import { MdLabelImportant } from "react-icons/md";
const Sidedata=[
    {
        logo:<FiInbox/>,
        data:'inbox'
    },
    {
        logo:<AiOutlineStar/>,
        data:'Starred'
    },
    {
        logo:<BiAlarmSnooze/>,
        data:'Snoozed'
    },
    {
        logo:<FaTelegramPlane/>,
        data:'Sent'
    },
    {
        logo:<FiInbox/>,
        data:'Drafts'
    },
    {
        logo:<FaLessThan/>,
        data:'Less'
    },
    {
        logo:<MdLabelImportant/>,
        data:'Important'
    },
    {
        logo:<FaSnapchatSquare/>,
        data:'Chats'
    },
    {
        logo:<AiFillSchedule/>,
        data:'Scheduled'
    },
    {
        logo:<AiOutlineFall/>,
        data:'All Mail'
    }
]

export default Sidedata;
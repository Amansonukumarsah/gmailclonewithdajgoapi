import React from 'react'

const Inbox = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
        <div className='d-flex bodyheadnav'>
        <ul>
          <li className='d-flex'>
            <input style={{ width: '15px', height: '15px', marginTop: '15px', marginLeft: '0px' }} type="checkbox" />
            {/* <select name="" id="">
              <option value="">
                All
              </option>
              <option value="">
                None
              </option>
              <option value="None">
                Read
              </option>
              <option value="">
                Unread
              </option>
              <option value="">
                Starred
              </option>
              <option value="">
                UnStarred
              </option>
          </select> */}
          </li>
        </ul>

        <ul>
          <li style={{ marginTop: '9px' }}>
            <IoMdRefresh size={20} />
          </li>
        </ul>

        <ul>
          <li style={{ marginTop: '9px' }}>
            <AiOutlineMore />
          </li>
        </ul>

        <div className='d-flex bodyheadnavright'>
          <p style={{ marginTop: '9px' }} className='text-black'>1-50 0f 525</p>
          <ul>
            <li style={{ marginTop: '9px' }}>
              <FaChevronLeft />
            </li>
          </ul>

          <ul>
            <li style={{ marginTop: '9px' }}>
              <FaChevronRight />
            </li>
          </ul>
        </div>

        <ul>
          <li style={{ marginTop: '9px' }}>
            <BsInputCursor size={20} />
          </li>
        </ul>

      </div>
        </div>


        <div className="container-fluid">
          <div className="row">
            <div className="col-10">
              <h4>Internship Invitation From Omikron Technologies Private Limited</h4>
            </div>
            <div className="col-2">
               <small>logo</small>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
export default Inbox
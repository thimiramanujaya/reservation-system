import './DetailsCard.scss'

const DetailsCard = ({ entityData, entity }) => {

  switch(entity) {
    case 'doctor':
      return (
        <div className="card">
          <h2>{entityData.name}</h2>
          <div className="card-body">
            <span>{entityData.email}</span>
            <span>{entityData.address}</span>
            <span>{entityData.phone}</span>
            {!entityData.is_available? <span>Not Available</span> : <span>Available</span>}
          </div>
        </div>
      )
    
    case 'patient':
      return (
        <div className="card">
          <h2>{entityData.name}</h2>
          <div className="card-body">
            <span>{entityData.dob}</span>
            <span>{entityData.gender}</span>
            <span>{entityData.email}</span>
            <span>{entityData.phone}</span>
            <span>{entityData.address}</span>
          </div>
        </div>
      )
    
    case 'reservation':
      return (
        <div className="card">
          <h2>{entityData.reservation_id}</h2>
          <div className="card-body">
            <span>{entityData.reserved_date}</span>
            <span>{entityData.reserved_time}</span>
            <span className='chip'>{entityData.status}</span>
          </div>
        </div>
      )

    default:
      return (
        <div className="default-card">
          <h2>{entityData.reservation_id}</h2>
          <div className="card-body">
            <span>{entityData.reserved_date}</span>
            <span>{entityData.reserved_time}</span>
            <span className='chip'>{entityData.status}</span>
          </div>
        </div>
      )
  }
  
}

export default DetailsCard
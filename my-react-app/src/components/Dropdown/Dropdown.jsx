function project(){
    return(
     <div className='flex flex-col '>
          <ul className="flex flex-col gap-4">
            <li>
              <a href="https://demo.erealestate.eaccount.xyz/project" className="waves-effect waves-block">All</a>
            </li>
            <li>
              <a href="https://demo.erealestate.eaccount.xyz/project/create" className="waves-effect waves-block">Create</a>
            </li>
            <li>
              <a href="https://demo.erealestate.eaccount.xyz/project/trashed" className="waves-effect waves-block">Trashed</a>
            </li>
          </ul>
          </div>
      
    ) 
      }

function product(){
    return(
<div className='flex flex-col '>
<ul className="flex flex-col gap-4" >
        <li >
          <a
            href="https://demo.erealestate.eaccount.xyz/product"
            className="nav-link waves-effect waves-block"
          >
            All
          </a>
        </li>
        <li >
          <a
            href="https://demo.erealestate.eaccount.xyz/product/create"
            className="nav-link waves-effect waves-block"
          >
            Create
          </a>
        </li>
        <li >
          <a
            href="https://demo.erealestate.eaccount.xyz/product/trashed"
            className="nav-link waves-effect waves-block"
          >
            Trashed
          </a>
        </li>
      </ul>
</div>
    )
}

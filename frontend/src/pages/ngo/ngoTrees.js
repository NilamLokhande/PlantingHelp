import { Toast } from 'bootstrap'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import TreeCard from '../../components/treeCard'
import trees from '../../tree.json'
import './ngoDetails.css'

const NgoTrees = () => {
    console.log('trees', trees)
    const [selectedTrees, setSelectedTrees] = useState([])
    const newtrees = [...new Set(selectedTrees)]

    const handleProcess=()=>{
        console.log('newtrees',newtrees)
        toast.success("Request Sent")
    }

    return (
        <div className='tree_main'>
            <h3>NGO's Trees</h3>
            <hr />
            <div className='tree_list'>
                {trees?.map((data) => {
                    return (
                        <TreeCard data={data} setSelectedTrees={setSelectedTrees} selectedTrees={selectedTrees} />
                    )
                })
                }
            </div>
            <div className='selected_list'>
                {selectedTrees && <h4>Selected Trees</h4>}
                {newtrees &&
                    newtrees?.map((data) => {
                        return (
                            <>
                            <label className='selected_tree_label'>{data.name}</label><br/>
                            </>
                        )
                    })
                }
                {selectedTrees && <button className='process_request_btn' style={{margin:'15px 0'}} onClick={handleProcess}>Process Request</button>}
            </div>
        </div>

    )
}

export default NgoTrees
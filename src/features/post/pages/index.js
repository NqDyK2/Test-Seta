import React, { useRef } from 'react'
import { Button, Table } from 'antd'
import { useGetAllPostsQuery } from '../../api/apiSlice'
import FormAddPosts from '../components/FormAddPosts';
import { useNavigate } from 'react-router-dom';

const PostPage = () => {
    const modalPostsRef = useRef();
    let columns = [
        {
            title: "STT",
            key: "stt",
            dataIndex: "stt",
            width:"5%",
        },
        {
            title: 'ID người đăng',
            key: 'userId',
            dataIndex: 'userId',
            width:"5%",
        },
        {
            title: "Tiêu đề",
            key: "title",
            dataIndex: "title",
            width:"20%",
        },
        {
            title: "Nội dung",
            key: "body",
            dataIndex: "body",
            width:"25%",
        },
    ]
    let data = []
    const {data:res , error, isLoading} = useGetAllPostsQuery();
   if(res) {
    data = res.map((item, index) => {
        return {
            key: index,
            stt: index + 1,
            userId:item.userId,
            title:item.title,
            body:item.body,
        }
        })
    }

    return (
        
        <>
            {isLoading && <span className='tw-text-red-500'>Loading...</span>}
            <Button
            type="link"
            onClick={() => modalPostsRef.current.show('ADD')}
            className='tw-my-5 tw-mx-5 tw-w-44 tw-rounded-md tw-float-right	hover:tw-bg-[#dc2626] hover:tw-border-transparent tw-border-transparent tw-text-white tw-bg-[#0DB27F]'> Thêm mới </Button>
            <Table 
            scroll={{x:200}}
            columns={columns} 
            dataSource={data} 
            pagination={false}
            size="middle"/>
            <FormAddPosts ref={modalPostsRef} />
        </>
    )
}

export default PostPage
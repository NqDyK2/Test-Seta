import React from 'react'
import { Table } from 'antd'

const PostPage = () => {

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
            width:"10%",
        },
        {
            title: "Nội dung",
            key: "body",
            dataIndex: "body",
            width:"20%",
        },
    ]

    const dataSource = [
        {
            stt: 1,
            key:1,
            userId: 1,
            title: "Post 1",
            body: "Content of Post 1"
        }
    ]

    return (
        <>
            <Table 
            columns={columns} 
            dataSource={dataSource} 
            pagination={false}
            size="small"/>
        </>
    )
}

export default PostPage
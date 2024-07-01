import React from "react";
import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";

const { Search } = Input;

const suffix = (
	<AudioOutlined
		style={{
			fontSize: 16,
			color: "#1677ff",
		}}
	/>
);

const onSearch = (value, _e, info) => console.log(info?.source, value);

const TableSearch = () => (
	<div
		style={{
			display: "flex",
			justifyContent: "flex-end",
			marginBottom: "10px",
		}}
	>
		<Space direction="vertical">
			<Search
				placeholder="Search by Name"
				allowClear
				enterButton="Search"
				size="large"
				onSearch={onSearch}
			/>
		</Space>
	</div>
);

export default TableSearch;

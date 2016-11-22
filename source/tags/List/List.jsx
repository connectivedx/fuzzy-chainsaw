import React from 'react';
import styles from './List.css';

function parseItems(itemsData, tagName, indents, bullets){
	let i, data, Tag, fragment, subFragment;
	Tag = tagName;
	fragment = [];
	for(i = 0; i < itemsData.length; i++){
		data = itemsData[i];
		data.className = data.className || '';
		if(data.subItems){
			data.subClass = data.subClass || '--sub--list';
			subFragment = parseItems(data.subItems, Tag, indents, bullets);
			fragment.push(<li className={'item '+data.className}><a href={data.href}>{data.text}</a><Tag className={'sub-list list--indents--'+indents + ' list--bullets--'+bullets + ' ' + data.subClass}>{subFragment}</Tag></li>);
		}else{
			fragment.push(<li className={'item '+data.className}><a href={data.href}>{data.text}</a></li>);
		}
	}
	return fragment;
}

export default ({
	className = '',
	children,
	tagName = 'ul',
	listData = [],
	bullets = false,
	indents = false
}) => {
	let Tag;
	Tag = tagName;
	if(listData.length) {
		children = parseItems(listData, Tag, indents, bullets);
	}
	return (
		<Tag className={'list ' + 'list--indents--'+indents + ' list--bullets--'+bullets + ' ' + className}>
			{children}
		</Tag>
	)	
}

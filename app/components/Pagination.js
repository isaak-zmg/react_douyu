import React from 'react'
import { Pagination } from 'antd'
import { render } from 'react-dom'

class Page extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.items.length < 16 ?
                        ''
                        :
                        <Pagination defaultCurrent={this.props.pageIndex}
                            current={this.props.pageIndex}
                            total={200}
                            onChange={(index) => this.props.onChangePage(index)}></Pagination>
                }

            </div>
        )
    }
}

export default Page
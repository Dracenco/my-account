import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { intlShape, injectIntl } from 'react-intl'
import Button from '@vtex/styleguide/lib/Button'
import Input from '@vtex/styleguide/lib/Input'
import ContentBox from '../shared/ContentBox'

class EditingAddressBox extends Component {
  render() {
    const { isNew, intl } = this.props
    const intlId = isNew ? 'addresses.addAddress' : 'addresses.saveAddress'
    return (
      <ContentBox width={'third'}>
        <form>
          <div className="mb7">
            <Input name="address" label="Endereço" />
          </div>
          <Button type="submit" variation="secondary" block size="small">
            {intl.formatMessage({ id: intlId })}
          </Button>
          {!isNew && (
            <div className="mt5">
              <Button type="button" variation="danger" block size="small">
                {intl.formatMessage({ id: 'addresses.deleteAddress' })}
              </Button>
            </div>
          )}
        </form>
      </ContentBox>
    )
  }
}

EditingAddressBox.propTypes = {
  isNew: PropTypes.bool,
  intl: intlShape.isRequired,
}

export default injectIntl(EditingAddressBox)

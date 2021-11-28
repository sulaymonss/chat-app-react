function TheirMessage({message, lastMessage}) {
    const isFirtsMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username
    return (
        <div className="message-row">
            {isFirtsMessageByUser && (
                <div className="message-avatar" style={{backgroundImage: `url(${message?.sender?.avatar})`}} />
            )}
            {message ?.attachment?.length > 0
                    ? (
                        <img src={message.attachments[0].file} alt='message-attachment' className="message-image" style={{marginLeft: isFirtsMessageByUser ? '4px' : '48px'}} />
                    ) : (
                        <div className="message" style={{float: 'left', backgroundColor: '#CABCDC', marginLeft: isFirtsMessageByUser ? '4px' : '48px'}}>
                        {message.text}
                        </div>
                    )
            }
        </div>
    )
}

export default TheirMessage

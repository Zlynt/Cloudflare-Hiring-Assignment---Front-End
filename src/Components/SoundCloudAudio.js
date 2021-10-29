

export const SoundCloudAudioTools = {
    validateSoundCloudUrl: (url) => {
        var regexp = /^https?:\/\/(soundcloud\.com|snd\.sc)\/(.*)$/;
        return url.match(regexp) && url.match(regexp)[2]
    }
};

export default ({ url }) => {
    return (
        SoundCloudAudioTools.validateSoundCloudUrl(url) ?
            <div
                className="video"
                style={{
                    position: "relative",
                    paddingBottom: "56.25%" /* 16:9 */,
                    paddingTop: 25,
                    marginBottom: "5px",
                    height: 0
                }}
            >
                <iframe
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%"
                    }}
                    src={`https://w.soundcloud.com/player/?url=${url}`}
                    frameBorder="0"
                />
            </div> :
            ''
    );
};
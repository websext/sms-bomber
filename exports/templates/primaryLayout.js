export default
`<div class="layout-wrapper">
<div class="form-content content-both">
	<header>
		<div class="headwrap">
			<div class="title"><h3>Bomber setup</h3></div>
			<div class="extlogo">
				<img src="/assets/icons/favicon-48x48.png" alt="SMS Bomber" draggable="false">
			</div>
		</div>
	</header>
	<form>
		<div class="field">
			<select name="target" id="target">
				<option value="0" selected>Select target (optional)</option>
				<option value="wishes">Random Wishes</option>
				<option value="joke">Random Jokes</option>
				<option value="emoji">Random Emoji</option>
				<option value="email">Random Email</option>
				<option value="number">Random Number</option>
				<option value="otp">Random OTP</option>
				<option value="link">Random Link</option>
				<option value="paragraph">Random Paragraph</option>
				<option value="0">Custom</option>
			</select>
			<div class="error target"></div>
		</div>
		<div class="field">
			<input type="text" name="message" id="message" placeholder="Type message..." autocomplete="off">
			<div class="error message"></div>
		</div>
		<div class="field">
			<input type="number" name="limit" id="limit" placeholder="Bomber limit" value="50" min="10" max="10000">
			<div class="error limit"></div>
		</div>
		<div class="field">
			<div class="group">
				<div class="fgfield">
					<input type="number" name="delay" id="delay" value="1000" min="100" max="10000" placeholder="Bomber delay">
				</div>
				<div class="fgfield">
					<select name="delay-type" id="delayType">
						<option data-value="1000" value="milliseconds" selected>Milliseconds</option>
						<option data-value="10" value="seconds">Seconds</option>
						<option data-value="1" value="minutes">Minutes</option>
					</select>
				</div>
			</div>
			<div class="error delay delay-type"></div>
		</div>
		<div class="field">
			<button>Start Bomber</button>
		</div>
	</form>
	<div class="meta">
		<img src="/assets/images/meta.png" alt="Meta" draggable="false" width="80" height="26">
	</div>
</div>
<div class="info-content content-both">
	<code>v1.0.0</code>
	<div class="content-view">
		<div><img src="/assets/images/cpsteps.png" alt="SMS Image" draggable="false"></div>
		<div class="appinfo">
			<h2>SMS Bomber</h2>
			<a href="https://github.com/extensionpro">Follow on Github</a>
		</div>
	</div>
	<footer>
		<p>Develope By: Shahzada Modassir</p>
		<p>Copyright &copy; <span class="copyright">2023</span> All rights reserved.</p>
	</footer>
</div>
</div>`;
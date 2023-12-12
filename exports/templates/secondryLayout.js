export default
`<div class="layout-wrapper terminal" style="flex-direction:column;">
<header>
	<div class="">
		<span><span class="aqua">sms-bomber</span> <span>by</span> <span class="aqua">@modassir</span></span>
	</div>
	<div><span>(Ctrl+Q to back)</span></div>
</header>
<div class="bomber-details">
	<div>Bomber Details<div>––––––––––––––</div></div>
	<table cellpadding="0" cellspacing="0" border="0">
		<tr>
			<td>Session</td>
			<td class="lg session">Connecting...</td>
		</tr>
		<tr>
			<td>Time</td>
			<td class="lg"><span class="time">00:00:00</span> (Bomber running current – timestamp)</td>
		</tr>
		<tr>
			<td>Delay</td>
			<td id="delay"></td>
		</tr>
		<tr>
			<td>Bomber Limit</td>
			<td id="limit"></td>
		</tr>
		<tr>
			<td>Limit Status</td>
			<td id="status"></td>
		</tr>
		<tr>
			<td>Forwarding</td>
			<td id="fowrarding"></td>
		</tr>
		<tr>
			<td>Target Web</td>
			<td><span class="web"></span> (Target web address)</td>
		</tr>
	</table>
</div>
<div class="bomber-request">
	<div>Bomber Requests<div>–––––––––––––––</div></div>
	<div class="scrollable-view">
		<div class="lb starter">Starting Bomber please wait...</div>
		<table cellpadding="0" cellspacing="0" border="0"><tbody></tbody></table>
	</div>
</div>
</div>`;